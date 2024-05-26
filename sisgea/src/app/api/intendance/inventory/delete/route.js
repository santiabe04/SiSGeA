import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function POST(req) {
  try {
    const id = await req.json();

    const result = await promisePool.query(`DELETE FROM inventory WHERE id = ${id};`);

    const res = await result[0];
    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}