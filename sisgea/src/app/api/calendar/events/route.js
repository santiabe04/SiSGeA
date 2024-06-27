import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM events;');
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
    const params = values.map(item => {
      if(!item.isRequired && (item.value?.trim() === "" || item.value === null)) {
        return "null";
      }
      else if(item.type === "time") {
        return `'${item.value}:00'`;
      }
      else if(item.type === "text" || item.type === "textarea" || item.type === "date") {
        return `'${item.value}'`;
      }
      else {
        return item.value;
      }
    }).join(',');

    const kindCheck = await promisePool.query('SELECT EXISTS(SELECT 1 FROM event_kinds WHERE id = ? AND disabledStatus = 0);',[values.find(x => x.name === 'kind').value]);

    if(Object.values(kindCheck[0][0])[0] != 0) {
      const result = await promisePool.query('INSERT INTO events (?) VALUES (?);',[fields,params]);

      const res = await result[0];
      return NextResponse.json({ res }, { status: 200 });
    }
    else {
      return NextResponse.json({ res: "Código Inhabilitado" }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 });
  }
}