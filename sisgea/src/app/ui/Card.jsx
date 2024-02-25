"use client"

import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/react"

export async function CardCurrencyBalance({ currency, wallets }) {
    var totalBalance = 0.00

    if(wallets.length > 1) {
        for (var i = 0; i < wallets.length; i++) {
            totalBalance += wallets[i].balance
        }
    }
    else {
        totalBalance = wallets.balance
    }

    return(
        <Card shadow="sm">
            <CardHeader className="text-xl justify-between">
                <b>{currency.name}</b>
            </CardHeader>
            <CardBody>
                <p className="text-lg text-default-700"><b>$ {totalBalance}</b></p>
            </CardBody>
            <CardFooter className="text-base justify-between">
                <p className="text-default-500">{currency.iso}</p>
            </CardFooter>
        </Card>
    )
}