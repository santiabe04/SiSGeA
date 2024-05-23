import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function GET() {
    try {
      const result = await promisePool.query('SELECT * FROM movements ORDER BY datetime DESC;');
      const res = result[0];
      return NextResponse.json({ res }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ res: err }, { status: 500 });
    }
}

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES movements WRITE, wallets WRITE;');

    const values = await req.json();

    const fields = values.map(item => item.name).join(',');
    const params = values.map(item => item.value === null ? "null" : item.value && ((item.type === "text" && item.value !== null) || (item.type === "textarea" && item.value !== null) ? `'${item.value}'` : item.value)).join(',');

    const currency = await promisePool.query(`SELECT currency FROM wallets WHERE id = ${values.find(x => x.name === 'wallet').value};`);


    var result = await promisePool.query(`INSERT INTO movements (${fields},currency) VALUES (${params},${currency[0][0].currency});`);

    // Update wallet balance
    var updateResult;
    if(values.find(x => x.name === 'type').value == 0) {
      updateResult = await promisePool.query(`UPDATE wallets SET balance = balance - ${values.find(x => x.name === 'amount').value} WHERE id = ${values.find(x => x.name === 'wallet').value};`);
    }
    else {
      updateResult = await promisePool.query(`UPDATE wallets SET balance = balance + ${values.find(x => x.name === 'amount').value} WHERE id = ${values.find(x => x.name === 'wallet').value};`);
    }


    const updateRes = await updateResult[0];

    // Unlock tables
    await promisePool.query('UNLOCK TABLES;');

    const res = await result[0];
    return NextResponse.json({ res, updateRes }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}