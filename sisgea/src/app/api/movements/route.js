import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
    try {
      const result = await promisePool.query('SELECT * FROM movements;')
      const res = await result[0]
      return NextResponse.json({ res }, { status: 200 })
    } catch (err) {
      return NextResponse.json({ res: err }, { status: 500 })
    }
}

export async function POST(req) {
  try {
    const { name,detail,amount,type,currency,wallet,kind } = req.body

    console.log({ name,detail,amount,type,currency,wallet,kind })

    // var result
    // if(detail) {
    //   result = await promisePool.query('INSERT INTO movements (name,detail,amount,type,currency,wallet,kind) VALUES (?,?,?,?,?,?,?);',[])
    // }
    // else {
    //   result = await promisePool.query('INSERT INTO movements (name,amount,type,currency,wallet,kind) VALUES (?,?,?,?,?,?);',[])
    // }

    // const res = await result[0]
    // return NextResponse.json({ res }, { status: 200 })
    return NextResponse.json({ res:"Ok" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 })
  }
}