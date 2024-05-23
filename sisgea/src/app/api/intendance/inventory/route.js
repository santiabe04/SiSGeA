import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

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

    var supply_kind = values.find(x => x.name === 'supply_kind').value;
    var location = values.find(x => x.name === 'location').value;
    var quantity = values.find(x => x.name === 'quantity').value;

    var result = await promisePool.query('INSERT INTO inventory (supply_kind,location,quantity) VALUES (?,?,?);',[supply_kind,location,quantity]);

    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}