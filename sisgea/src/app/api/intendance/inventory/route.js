import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM inventory;');
    const res = await result[0];
    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES inventory WRITE, inventory_locations WRITE, supply_kinds WRITE;');

    const values = await req.json();

    const fields = values.map(item => item.name).join(',');
    const params = values.map(item => item.value === null ? "null" : item.value && ((item.type === "text" && item.value !== null) || (item.type === "textarea" && item.value !== null) ? `'${item.value}'` : item.value)).join(',');

    const locationCheck = await promisePool.query('SELECT EXISTS(SELECT 1 FROM inventory_locations WHERE id = ? AND disabledStatus = 0);',[values.find(x => x.name === 'location').value]);
    const supply_kindCheck = await promisePool.query('SELECT EXISTS(SELECT 1 FROM supply_kinds WHERE id = ? AND disabledStatus = 0);',[values.find(x => x.name === 'supply_kind').value]);

    if(Object.values(locationCheck[0][0])[0] != 0 && Object.values(supply_kindCheck[0][0])[0] != 0) {
      var result = await promisePool.query('INSERT INTO inventory (?) VALUES (?);',[fields,params]);
      
      // Unlock tables
      await promisePool.query('UNLOCK TABLES;');

      const res = await result[0];
      return NextResponse.json({ res }, { status: 200 });
    }
    else {
      // Unlock tables
      await promisePool.query('UNLOCK TABLES;');
      return NextResponse.json({ res: "Código Inhabilitado" }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}