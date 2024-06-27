import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function POST(req) {
  try {
    const id = await req.json();

    const result = await promisePool.query('SELECT * FROM inventory WHERE id = ?;',[id]);
    const res = result[0];
    return NextResponse.json({ res:{res,status:200} }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res:{res:err,status:500} }, { status: 500 });
  }
}