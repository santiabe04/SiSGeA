import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM inventory;');
    const res = await result[0];
    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const values = await req.json();

    const fields = values.map(item => item.name).join(',');
    const params = values.map(item => item.value === null ? "null" : item.value && ((item.type === "text" && item.value !== null) || (item.type === "textarea" && item.value !== null) ? `'${item.value}'` : item.value)).join(',');

    var result = await promisePool.query(`INSERT INTO inventory (${fields}) VALUES (${params});`);

    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}