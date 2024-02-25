import { NextResponse } from 'next/server'

import promisePool from '@/app/lib/db'

export async function GET() {
    try {
      const result = await promisePool.query('SELECT * FROM movements ORDER BY datetime DESC;')
      const res = result[0]
      return NextResponse.json({ res }, { status: 200 })
    } catch (err) {
      return NextResponse.json({ res: err }, { status: 500 })
    }
}

export async function POST(req) {
  try {
    // Lock tables
    await promisePool.query('LOCK TABLES movements WRITE, wallets WRITE;')

    const { name,detail,amount,type,wallet,kind } = await req.json()

    const currency = await promisePool.query('SELECT currency FROM wallets WHERE id = ?;',[wallet])

    var result
    if(detail) {
      result = await promisePool.query('INSERT INTO movements (name,detail,amount,type,currency,wallet,kind) VALUES (?,?,?,?,?,?,?);',[name,detail,amount,type,currency[0][0].currency,wallet,kind])
    }
    else {
      result = await promisePool.query('INSERT INTO movements (name,amount,type,currency,wallet,kind) VALUES (?,?,?,?,?,?);',[name,amount,type,currency[0][0].currency,wallet,kind])
    }

    // Update wallet balance
    var updateResult
    if(type == 0) {
      updateResult = await promisePool.query('UPDATE wallets SET balance = balance - ? WHERE id = ?;', [amount, wallet])
    }
    else {
      updateResult = await promisePool.query('UPDATE wallets SET balance = balance + ? WHERE id = ?;', [amount, wallet])
    }

    const updateRes = await updateResult[0]

    // Unlock tables
    await promisePool.query('UNLOCK TABLES;')

    const res = await result[0]
    return NextResponse.json({ res, updateRes }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ res: err }, { status: 500 })
  }
}