import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM wallets;')
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES currencies WRITE, wallets WRITE;');

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

    const currencyCheck = await promisePool.query(`SELECT EXISTS(SELECT 1 FROM currencies WHERE id = ${values.find(x => x.name === 'currency').value} AND disabledStatus = 0);`);

    if(Object.values(currencyCheck[0][0])[0] != 0) {
      var result = await promisePool.query(`INSERT INTO wallets (${fields}) VALUES (${params});`);

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