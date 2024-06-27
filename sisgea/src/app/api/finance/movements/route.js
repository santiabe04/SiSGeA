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
    await promisePool.query('LOCK TABLES movements WRITE, wallets WRITE, movement_kinds WRITE;');

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

    const currency = await promisePool.query('SELECT currency FROM wallets WHERE id = ? AND disabledStatus = 0;',[values.find(x => x.name === 'wallet').value]);
    const kindCheck = await promisePool.query('SELECT EXISTS(SELECT 1 FROM movement_kinds WHERE id = ? AND disabledStatus = 0);',[values.find(x => x.name === 'kind').value]);

    if(Object.values(kindCheck[0][0])[0] != 0 && currency[0][0].currency) {
      var result = await promisePool.query('INSERT INTO movements (?,currency) VALUES (?,?);',[fields,params,currency[0][0].currency]);

      // Update wallet balance
      var updateResult;
      if(values.find(x => x.name === 'type').value == 0) {
        updateResult = await promisePool.query('UPDATE wallets SET balance = balance - ? WHERE id = ?;',[values.find(x => x.name === 'amount').value,values.find(x => x.name === 'wallet').value]);
      }
      else {
        updateResult = await promisePool.query('UPDATE wallets SET balance = balance + ? WHERE id = ?;',[values.find(x => x.name === 'amount').value,values.find(x => x.name === 'wallet').value]);
      }
      // Unlock tables
      await promisePool.query('UNLOCK TABLES;');

      const updateRes = await updateResult[0];
      const res = await result[0];
      return NextResponse.json({ res, updateRes }, { status: 200 });
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