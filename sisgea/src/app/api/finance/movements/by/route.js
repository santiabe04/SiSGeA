import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function POST(req) {
    try {  
      const { name,detail,amount,currency,type,wallet,kind } = await req.json()
  
      const result = await promisePool.query('SELECT * FROM movements WHERE ?;',[name,detail,amount,type,currency,wallet,kind])
  
      const res = await result[0]
      return NextResponse.json({ res }, { status: 200 })
    } catch (err) {
      return NextResponse.json({ res: err }, { status: 500 })
    }
  }