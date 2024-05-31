import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES currencies WRITE, wallets WRITE;');
    
    const id = await req.json();

    const checkEmptyCurrency = await promisePool.query(`SELECT balance FROM wallets WHERE currency = ${id};`);

    if(checkEmptyCurrency[0][0]?.balance == 0.00 || !checkEmptyCurrency[0][0]) {
      const result = await promisePool.query(`UPDATE currencies SET disabledStatus = 1 WHERE id = ${id};`);
      const resultWallets = await promisePool.query(`UPDATE wallets SET disabledStatus = 1 WHERE currency = ${id};`);
      await promisePool.query('UNLOCK TABLES;');

      const walletsRes = resultWallets[0];
      const res = result[0];

      return NextResponse.json({ res:{res,walletsRes,status:200} }, { status: 200 });
    }
    await promisePool.query('UNLOCK TABLES;');

    return NextResponse.json({ res: {res:"La divisa o sus cuentas no están vacías",status:500} }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ res: {res:err,status:500} }, { status: 500 });
  }
}