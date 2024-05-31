import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function POST(req) {
  try {
    const { params, id} = await req.json();

    const setClauses = params.map(item => {
      if (!item.isRequired && (item.value?.trim() === "" || item.value === null)) {
        return `${item.name} = NULL`;
      } else if (item.type === "text" || item.type === "textarea") {
        return `${item.name} = '${item.value.replace(/'/g, "''")}'`;
      } else {
        return `${item.name} = ${item.value}`;
      }
    }).join(', ');

    var result = await promisePool.query(`UPDATE event_kinds SET ${setClauses} WHERE id = ${id};`);

    const res = result[0];
    return NextResponse.json({ res: {res,status:200} }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: {res:err,status:500} }, { status: 500 });
  }
}