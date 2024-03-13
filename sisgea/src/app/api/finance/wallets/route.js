import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
  try {
    const result = await promisePool.query('SELECT * FROM wallets;')
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const { id } = await req.json()

    var result
    if(id) {
      result = await promisePool.query('SELECT * FROM wallets WHERE currency = ?;',[id])
    }

    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}