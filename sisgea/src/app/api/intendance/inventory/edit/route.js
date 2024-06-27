import { NextResponse } from 'next/server';

import promisePool from '@/app/lib/db';

export async function POST(req) {
  try {
    const { params, id } = await req.json();
    
    const setClauses = params.map(item => {
      if (!item.isRequired && (item.value?.trim() === "" || item.value === null)) {
        return `${item.name} = NULL`;
      } else {
        return `${item.name} = ${item.value}`;
      }
    }).join(', ');
    
    const now = new Date();

    const padTo2Digits = (num) => {
      return num.toString().padStart(2, '0');
    };

    const day = padTo2Digits(now.getDate());
    const month = padTo2Digits(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = padTo2Digits(now.getHours());
    const minutes = padTo2Digits(now.getMinutes());
    const seconds = padTo2Digits(now.getSeconds());

    const update_date = `${year}:${month}:${day} ${hours}:${minutes}:${seconds}`;

    var result = await promisePool.query('UPDATE inventory SET ?, update_date = '?.00' WHERE id = ?;',[setClauses,update_date,id]);

    const res = result[0];
    return NextResponse.json({ res: {res,status:200} }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ res: {err,status:500} }, { status: 500 });
  }
}