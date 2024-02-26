"use client"

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import StructureComponent from "./Structure"
import React, { useState } from 'react'
import { newMovement } from "@/app/lib/services/movements.service"
import { useRouter } from "next/navigation"

function MovementFormComponent({ wallets, kinds }) {
  /*Fields Value Limits from the db*/
  const limitAmount = 99999999999999999999.99
  const limitName = 45
  const limitDetail = 255

  const router = useRouter()

  /*Fields States*/
  const [name, setName] = useState("")
  const [invalidName, setInvalidName] = useState(false)
  const [detail, setDetail] = useState("")
  const [invalidDetail, setInvalidDetail] = useState(false)
  const [amount, setAmount] = useState(0.00)
  const [invalidAmount, setInvalidAmount] = useState(false)
  const [type, setType] = useState(0)
  const [invalidType, setInvalidType] = useState(false)
  const [wallet, setWallet] = useState(1)
  const [invalidWallet, setInvalidWallet] = useState(false)
  const [kind, setKind] = useState(0)
  const [invalidKind, setInvalidKind] = useState(false)

  /*Handle Field Changes*/
  /*Checks Name*/
  const handleNameChange = (e) => {
    if(e.target.value.trim() == "" || e.target.value.length > limitName) {
      setInvalidName(true)
    }
    else {
      setInvalidName(false)
      setName(e.target.value)
    }
  }
  /*Checks Detail*/
  const handleDetailChange = (e) => {
    if(e.target.value.trim() != "" && e.target.value.length > limitDetail) {
      setInvalidDetail(true)
    }
    else {
      setInvalidDetail(false)
      setDetail(e.target.value)
    }
  }
  /*Checks Amount*/
  const handleAmountChange = (e) => {
    const value = e.target.value
    const floatValue = parseFloat(value)
    if (!isNaN(floatValue) && floatValue > 0 && floatValue <= limitAmount) {
      setInvalidAmount(false)
      setAmount(parseFloat(floatValue.toFixed(2)))
    } else {
      setInvalidAmount(true)
    }
  }
  /*Checks Type*/
  const handleTypeChange = (e) => {
    if(parseInt(e.target.value) != 0 && parseInt(e.target.value) != 1) {
      setInvalidType(true)
    }
    else {
      setInvalidType(false)
      setType(parseInt(e.target.value))
    }
  }
  /*Checks Wallet*/
  const handleWalletChange = (e) => {
    if(parseInt(e.target.value) == 0) {
      setInvalidWallet(true)
    }
    else {
      setInvalidWallet(false)
      setWallet(parseInt(e.target.value))
    }
  }
  /*Checks Kind*/
  const handleKindChange = (e) => {
    if(parseInt(e.target.value) <= 0) {
      setInvalidKind(true)
    }
    else {
      setKind(parseInt(e.target.value))
    }
  }

  /*Handle Form Submit*/
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await newMovement({name,detail,type,amount,wallet,kind})
    if(result) {
      alert("Creado con éxito")
    }
    else {
      alert("Ocurrió un error")
    }
    
    router.push("/private/finance")
  }

  /*Handle Cancel*/
  const handleCancel = async (e) => {
    e.preventDefault()

    const response = confirm("Seguro que desea cancelar?")

    if (response) {
      router.push("/private/finance")
    }
  }

  return (
    <StructureComponent
      title="Nuevo Movimiento"
      content=
      {
        <>
          <form onSubmit={handleSubmit}>

            {/*Name Input*/}
            <Input
              isRequired
              label="Nombre"
              placeholder="Nombre"
              labelPlacement="outside"
              onChange={handleNameChange}
              isInvalid={invalidName}
              color={invalidName ? "danger" : ""}
              errorMessage={invalidName && "Ingrese un nombre válido"}
              type="text"
              size="lg"
              className="p-2"
            />

            {/*Detail Input*/}
            <Textarea
              label="Detalle"
              placeholder="Detalle"
              labelPlacement="outside"
              onChange={handleDetailChange}
              isInvalid={invalidDetail}
              color={invalidDetail ? "danger" : ""}
              errorMessage={invalidDetail && "Ingrese un detalle válido"}
              type="text"
              size="lg"
              className="p-2"
            />

            {/*Amount Input*/}
            <Input
              isRequired
              label="Monto"
              placeholder="0.00"
              labelPlacement="outside"
              onChange={handleAmountChange}
              isInvalid={invalidAmount}
              color={invalidAmount ? "danger" : ""}
              errorMessage={invalidAmount && "Ingrese un monto válido"}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
              type="number"
              size="lg"
              className="p-2"
            />

            {/*Type Select*/}
            <Select
                isRequired
                label="Tipo"
                placeholder="Seleccione el Tipo"
                labelPlacement="outside"
                onChange={handleTypeChange}
                isInvalid={invalidType}
                color={invalidType ? "danger" : ""}
                errorMessage={invalidType && "Ingrese un tipo válido"}
                size="lg"
                className="p-2"
            >
                <SelectItem key="1" value={1}>
                    Entrada
                </SelectItem>
                <SelectItem key="0" value={0}>
                    Salida
                </SelectItem>
            </Select>

            {/*Wallet Select*/}
            <Select
                isRequired
                label="Cuenta"
                placeholder="Seleccione la Cuenta"
                labelPlacement="outside"
                onChange={handleWalletChange}
                isInvalid={invalidWallet}
                color={invalidWallet ? "danger" : ""}
                errorMessage={invalidWallet && "Ingrese una cuenta válida"}
                size="lg"
                className="p-2"
            >
                {
                  wallets.map((walletItem) => (
                    <SelectItem key={walletItem.id} value={walletItem.id}>
                      {walletItem.name}
                    </SelectItem>
                  ))
                }
            </Select>

            {/*Kind Select*/}
            <Select
                isRequired
                label="Categoría"
                placeholder="Seleccione la Categoría"
                labelPlacement="outside"
                onChange={handleKindChange}
                isInvalid={invalidKind}
                color={invalidKind ? "danger" : ""}
                errorMessage={invalidKind && "Ingrese una categoría válida"}
                size="lg"
                className="p-2"
            >
                {
                  kinds.map((kindItem) => (
                    <SelectItem key={kindItem.id} value={kindItem.id}>
                      {kindItem.name}
                    </SelectItem>
                  ))
                }
            </Select>

            <br />

            <Button size="lg" type="submit" className="mr-2">Cargar</Button>
            <Button size="lg" type="button" color="danger" onClick={handleCancel}>Cancelar</Button>

          </form>
        </>
      }
    />
  )
}

export default MovementFormComponent