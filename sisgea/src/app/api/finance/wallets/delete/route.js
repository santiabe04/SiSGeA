import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function POST(req) {
  try {
    const id = await req.json();

    const checkEmptyWallet = await promisePool.query(`SELECT balance FROM wallets WHERE id = ${id};`);

    if(checkEmptyWallet[0][0]?.balance == 0.00 || !checkEmptyWallet[0][0]) {
      const result = await promisePool.query(`UPDATE wallets SET disabledStatus = 1 WHERE id = ${id};`);

      const res = await result[0];
      return NextResponse.json({ res: {res,status:200} }, { status: 200 });
    }

    return NextResponse.json({ res: {res:"La cuenta no está vacía",status:500} }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ res: {res:err,status:500} }, { status: 500 });
  }
}