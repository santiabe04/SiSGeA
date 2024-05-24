import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM inventory_locations;')
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}

export async function POST(req) {
  try {
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

    var result = await promisePool.query(`INSERT INTO inventory_locations (${fields}) VALUES (${params});`);

    const res = await result[0];
    return NextResponse.json({ res, updateRes }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}