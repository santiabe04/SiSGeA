"use client"

import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import React, { useMemo, useState } from 'react'

function MovementsTableComponent({ data }) {
    const [page, setPage] = useState(1)
    const rowsPerPage = 10

    const pages = Math.ceil(data.length / rowsPerPage)

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage
        const end = start + rowsPerPage

        return data.slice(start, end)
    }, [page, data])
    
    return (
        <>
            <Table 
                isStriped
                removeWrapper
                className='w-fit'
                aria-label="Movements Consult"
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
                    <TableColumn key="name">NOMBRE</TableColumn>
                    <TableColumn key="detail">DETALLE</TableColumn>
                    <TableColumn key="amount">MONTO</TableColumn>
                    <TableColumn key="type">TIPO</TableColumn>
                    <TableColumn key="datetime">FECHA</TableColumn>
                    <TableColumn key="currency">DIVISA</TableColumn>
                    <TableColumn key="wallet">CUENTA</TableColumn>
                    <TableColumn key="kind">CATEGORIA</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"Consulta vacía"} items={items}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell key={columnKey}>
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default MovementsTableComponent