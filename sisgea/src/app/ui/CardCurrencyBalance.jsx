"use client"

import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/react"

export async function CardCurrencyBalance({ currency, balance }) {

    return(
        <Card shadow="sm">
            <CardHeader className="text-xl justify-between">
                <b>{currency.name}</b>
            </CardHeader>
            <CardBody>
                <p className="text-lg text-default-700"><b>$ {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(balance)}</b></p>
            </CardBody>
            <CardFooter className="text-base justify-between">
                <p className="text-default-500">{currency.iso}</p>
            </CardFooter>
        </Card>
    )
}