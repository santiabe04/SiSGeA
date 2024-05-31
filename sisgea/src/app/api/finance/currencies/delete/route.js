import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES currencies WRITE, wallets WRITE;');
    
    const id = await req.json();

    const result = await promisePool.query(`UPDATE currencies SET disabledStatus = 1 WHERE id = ${id};`);
    const resultWallets = await promisePool.query(`UPDATE wallets SET disabledStatus = 1 WHERE currency = ${id};`);

    // Unlock tables
    await promisePool.query('UNLOCK TABLES;');

    const walletsRes = await resultWallets[0];
    const res = await result[0];

    return NextResponse.json({ res,walletsRes }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}