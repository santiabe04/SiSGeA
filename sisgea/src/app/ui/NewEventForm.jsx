"use client"

import { useRouter } from "next/navigation"
import StructureComponent from "./Structure"
import { useState } from "react"
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { newEvent } from "../lib/services/events/events.service"

function NewEventFormComponent({ kinds }) {
  const router = useRouter()
  const limitName = 45
  const limitDetail = 255

  /*Fields States*/
  const [name, setName] = useState("")
  const [invalidName, setInvalidName] = useState(false)
  const [detail, setDetail] = useState("")
  const [invalidDetail, setInvalidDetail] = useState(false)
  const [date, setDate] = useState("")
  const [invalidDate, setInvalidDate] = useState(false)
  const [time, setTime] = useState("")
  const [invalidTime, setInvalidTime] = useState(false)
  const [endDate, setEndDate] = useState("")
  const [invalidEndDate, setInvalidEndDate] = useState(false)
  const [endTime, setEndTime] = useState("")
  const [invalidEndTime, setInvalidEndTime] = useState(false)
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
  /*Checks Date*/
  const handleDateChange = (e) => {
      if(e.target.value.trim() == "") {
          setInvalidDate(true)
      }
      else {
          setInvalidDate(false)
          setDate(e.target.value)
      }
  }
  /*Checks Time*/
  const handleTimeChange = (e) => {
    if(e.target.value.trim() == "") {
      setInvalidTime(true)
    }
    else {
      setInvalidTime(false)
      setTime(e.target.value)
    }
  }
  /*Checks End Date*/
  const handleEndDateChange = (e) => {
    if(e.target.value.trim() == "") {
        setInvalidEndDate(true)
    }
    else {
        setInvalidEndDate(false)
        setEndDate(e.target.value)
    }
}
/*Checks End Time*/
const handleEndTimeChange = (e) => {
  if(e.target.value.trim() == "") {
    setInvalidEndTime(true)
  }
  else {
    setInvalidEndTime(false)
    setEndTime(e.target.value)
  }
}
  /*Checks Kind*/
  const handleKindChange = (e) => {
      if(parseInt(e.target.value) <= 0) {
          setInvalidKind(true)
      }
      else {
          setInvalidKind(false)
          setKind(parseInt(e.target.value))
      }
  }

  /*Handle Form Submit*/
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await newEvent({name,detail,date,time,endDate,endTime,kind})
    if(result) {
      alert("Creado con éxito")
    }
    else {
      alert("Ocurrió un error")
    }
    
    router.push("/private/events")
  }

  /*Handle Cancel*/
  const handleCancel = async (e) => {
    e.preventDefault()

    const response = confirm("Seguro que desea cancelar?")

    if (response) {
        router.push("/private/events")
    }
  }

  return (
    <StructureComponent
      title="Nuevo Evento"
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

            {/*Date Input*/}
            <Input
              isRequired
              label="Fecha"
              placeholder="Fecha"
              labelPlacement="outside"
              onChange={handleDateChange}
              isInvalid={invalidDate}
              color={invalidDate ? "danger" : ""}
              errorMessage={invalidDate && "Ingrese una fecha válida"}
              type="date"
              size="lg"
              className="p-2"
            />

            {/*Time Input*/}
            <Input
              isRequired
              label="Hora"
              placeholder="Hora"
              labelPlacement="outside"
              onChange={handleTimeChange}
              isInvalid={invalidTime}
              color={invalidTime ? "danger" : ""}
              errorMessage={invalidTime && "Ingrese una hora válida"}
              type="time"
              size="lg"
              className="p-2"
            />

            {/*End Date Input*/}
            <Input
              label="Fecha Finalización"
              placeholder="Fecha Finalización"
              labelPlacement="outside"
              onChange={handleEndDateChange}
              isInvalid={invalidEndDate}
              color={invalidEndDate ? "danger" : ""}
              errorMessage={invalidEndDate && "Ingrese una fecha válida"}
              type="date"
              size="lg"
              className="p-2"
            />

            {/*End Time Input*/}
            <Input
              label="Hora Finalización"
              placeholder="Hora Finalización"
              labelPlacement="outside"
              onChange={handleEndTimeChange}
              isInvalid={invalidEndTime}
              color={invalidEndTime ? "danger" : ""}
              errorMessage={invalidEndTime && "Ingrese una hora válida"}
              type="time"
              size="lg"
              className="p-2"
            />

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

export default NewEventFormComponent