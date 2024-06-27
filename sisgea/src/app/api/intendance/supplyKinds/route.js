import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM supply_kinds;')
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES supply_kinds WRITE, measurement_units WRITE;');

    const values = await req.json();

    const fields = values.map(item => item.name).join(',');
    const params = values.map(item => {
      if(!item.isRequired && (item.value?.trim() === "" || item.value === null)) {
        return "null";
      }
      else if(item.type === "text" || item.type === "textarea") {
        return `'${item.value}'`;
      }
      else {
        return item.value;
      }
    }).join(',');

    const measurementUnitCheck = await promisePool.query('SELECT EXISTS(SELECT 1 FROM measurement_units WHERE id = ? AND disabledStatus = 0);',[values.find(x => x.name === 'measurement_unit').value]);

    if(Object.values(measurementUnitCheck[0][0])[0] != 0) {
      var result = await promisePool.query('INSERT INTO supply_kinds (?) VALUES (?);',[fields,params]);
      
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