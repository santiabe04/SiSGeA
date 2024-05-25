"use client"

import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, getKeyValue } from '@nextui-org/react'
import React, { useMemo, useState } from 'react'
import { EditIcon } from './EditIcon'
import { DeleteIcon } from './DeleteIcon'

function TableComponent({ data, rowsPerPage, title, columns, editAPICall, deleteAPICall }) {
    const [page, setPage] = useState(1)

    const pages = Math.ceil(data.length / rowsPerPage)

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage
        const end = start + rowsPerPage

        return data.slice(start, end)
    }, [page, data])

    const editHandler = async (id) => {
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

    const deleteHandler = async (id) => {
        const response = confirm("Seguro que desea eliminar?");

        if (response) {
            const result = await deleteAPICall(id)

            if(result) {
                alert("Se eliminó con éxito");
                window.location.reload();
            }
            else {
                alert("Ocurrió un error");
            }
        }
    }
    
    return (
        <>
            <Table 
                isStriped
                removeWrapper
                className='w-fit'
                aria-label={title}
                bottomContent={
                    <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                    </div>
                }
                classNames={{
                    wrapper: "min-h-[222px]",
                }}
            >
                <TableHeader>
                    {
                        columns.map((column) => (
                            <TableColumn key={column.key}>{column.label}</TableColumn>
                        ))
                    }
                </TableHeader>
                <TableBody emptyContent={"Consulta vacía"} items={items}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {
                                columns.map((column) => (
                                    <TableCell key={column.key}>
                                        {
                                            column.key == "edit" ? (
                                                <Tooltip content="Editar">
                                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                        <EditIcon  onClick={() => editHandler(item.id)}/>
                                                    </span>
                                                </Tooltip>
                                            ) : column.key == "delete" ? (
                                                <Tooltip color="danger" content="Eliminar">
                                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                        <DeleteIcon onClick={() => deleteHandler(item.id)}/>
                                                    </span>
                                                </Tooltip>
                                            ) : getKeyValue(item, column.key)
                                        }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default TableComponent