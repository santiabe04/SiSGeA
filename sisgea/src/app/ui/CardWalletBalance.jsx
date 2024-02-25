"use client"

import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/react"

export async function CardWalletBalance({ wallet, currency }) {

    return(
        <Card shadow="sm">
            <CardHeader className="text-xl justify-between">
                <b>{wallet.name}</b>
            </CardHeader>
            <CardBody>
                <p className="text-lg text-default-700"><b>$ {wallet.balance}</b></p>
            </CardBody>
            <CardFooter className="text-base justify-between">
                <p className="text-default-500">{currency}</p>
            </CardFooter>
        </Card>
    )
}