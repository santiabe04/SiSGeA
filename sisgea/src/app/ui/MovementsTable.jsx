"use client"

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getAllMovements, getMovementsBy } from '../lib/services/movements.service'

async function MovementsTableComponent() {
    const [movements, setMovements] = useState([])
    //const [filters, setFilters] = useState({})

    useEffect(async () => {
        await fetchData()
    }, [])

    /* Fetch Movements */
    const fetchData = async () => {
        try {
            //const { data } = await getMovementsBy(filters)
            const { data } = await getAllMovements()
            console.log(data)
            setMovements(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return (
        <Table className='w-fit' aria-label="Movements Consult">
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
            <TableBody emptyContent={"Consulta vacía"} items={movements}>
                {(item) => (
                    <TableRow key={item.name}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default MovementsTableComponent