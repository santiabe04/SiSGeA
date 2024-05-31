"use client"

import { Card, CardFooter, CardHeader, CardBody, Tooltip } from "@nextui-org/react"
import { EditIcon } from "./EditIcon"
import { DeleteIcon } from "./DeleteIcon"
import { deleteWallet } from "../lib/services/finance/wallets.service"

export async function CardWalletBalance({ wallet, currency }) {
    const editWalletHandler = async (id) => {
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

    const deleteWalletHandler = async (id) => {
        const response = confirm("Seguro que desea eliminar?");

        if (response) {
            const result = await deleteWallet(id);

            if(result.res.status != 500) {
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
                <b>{wallet.name}</b>
            </CardHeader>
            <CardBody>
                <p className="text-lg text-default-700"><b>$ {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(wallet.balance)}</b></p>
            </CardBody>
            <CardFooter className="text-base justify-between">
                <p className="text-default-500">{currency}</p>
                <Tooltip content="Editar">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon onClick={() => editWalletHandler(wallet.id)}/>
                    </span>
                </Tooltip>
                <Tooltip color="danger" content="Eliminar">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => deleteWalletHandler(wallet.id)}/>
                    </span>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}