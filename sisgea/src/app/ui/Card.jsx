"use client"

import { Card, CardFooter, CardHeader } from "@nextui-org/react"

export function CardCurrencyBalance({ item }) {
    return(
        <Card shadow="sm">
            <CardHeader className=" text-xl justify-between">
                <b>{item.title}</b>
            </CardHeader>
            <CardFooter className="text-base justify-between">
                <p className="text-default-500">{item.price}</p>
            </CardFooter>
        </Card>
    )
}