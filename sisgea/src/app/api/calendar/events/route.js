import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM events;')
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const { name,date,time,kind,detail,endDate,endTime } = await req.json()

    const optionalColumns = (detail != "" ? ",detail" : "") + (endDate != "" ? ",date_end" : "") + (endTime != "" ? ",time_end" : "")
    const optionalData = (detail != "" ? `,'${detail}'` : ``) + (endDate != "" ? `,'${endDate}'` : ``) + (endTime != "" ? `,'${endTime}:00'` : ``)

    const result = await promisePool.query(`INSERT INTO events (name,date,time,kind${optionalColumns}) VALUES ('${name}','${date}','${time}:00',${kind}${optionalData});`)
    
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 })
  }
}