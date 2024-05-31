"use client"

import { Card, CardFooter, CardHeader, CardBody, Tooltip } from "@nextui-org/react"
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { deleteCurrency } from "../lib/services/finance/currencies.service";

export async function CardCurrencyBalance({ currency, balance }) {
    const editCurrencyHandler = async (id) => {
        // const result = await editAPICall(id)

        // if(result) {
        //     alert("Se editó con éxito");
        //     window.location.reload();
        // }
        // else {
        //     alert("Ocurrió un error");
        // }
        alert("Ocurrió un error");
    }

    const deleteCurrencyHandler = async (id) => {
        const response = confirm("Seguro que desea eliminar?");

        if (response) {
            const result = await deleteCurrency(id);

            if(result.res.status == 200) {
                alert("Se eliminó con éxito");
                window.location.reload();
            }
            else {
                alert("Ocurrió un error: " + result.res.res);
            }
        }
    }

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
                <Tooltip content="Editar">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon  onClick={() => editCurrencyHandler(currency.id)}/>
                    </span>
                </Tooltip>
                <Tooltip color="danger" content="Eliminar">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => deleteCurrencyHandler(currency.id)}/>
                    </span>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}