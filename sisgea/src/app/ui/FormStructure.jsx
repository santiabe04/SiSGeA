'use client'

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import StructureComponent from "./Structure";
import { useRouter } from "next/navigation";

function FormStructureComponent({ title, fields, fallbackRoute, submitAPICall }) {
    const router = useRouter();

    const values = fields.map((field) => ({ name: field.name, type: field.type, isRequired: field.isRequired, value: null }));

    const changeHandler = (fieldName, value) => {
        const fieldIndex = fields.findIndex(x => x.name == fieldName);

        if (fieldIndex !== -1) {
            values[fieldIndex].value = value;
        }
    }

    const Submit = async (e) => {
        e.preventDefault();

        const result = await submitAPICall(values)

        if(result) {
            alert("La operación finalizó con éxito");
        }
        else {
            alert("Ocurrió un error");
        }
        
        router.push(fallbackRoute);
    }

    const Cancel = (e) => {
        e.preventDefault();

        const response = confirm("Seguro que desea cancelar?");

        if (response) {
        router.push(fallbackRoute);
        }
    }

    return (
        <StructureComponent
        title={title}
        content=
        {
            <>
            <form onSubmit={Submit}>

                {
                    fields.map((field, index) => {
                        if (field.type === "text") {
                            return (
                                <Input
                                    key={index}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    placeholder={field.label}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name, e.target.value)}
                                    type="text"
                                    size="lg"
                                    className="p-2"
                                />
                            );
                        }

                        if (field.type === "textarea") {
                            return (
                                <Textarea
                                    key={index}
                                    label={field.label}
                                    placeholder={field.label}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name, e.target.value)}
                                    type="text"
                                    size="lg"
                                    className="p-2"
                                />
                            );
                        }

                        if (field.type === "number" || field.type === "float") {
                            return (
                                <Input
                                    key={index}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    placeholder={field.type === "number" ? "0" : "0.00"}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name, e.target.value)}
                                    type="number"
                                    size="lg"
                                    className="p-2"
                                    startContent={field.startContent}
                                />
                            );
                        }

                        if (field.type === "date") {
                            return (
                                <Input
                                    key={index}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name, e.target.value)}
                                    type="date"
                                    size="lg"
                                    className="p-2"
                                />
                            );
                        }

                        if (field.type === "time") {
                            return (
                                <Input
                                    key={index}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name, e.target.value)}
                                    type="time"
                                    size="lg"
                                    className="p-2"
                                />
                            );
                        }

                        if (field.type === "select") {
                            return (
                                <Select
                                    key={index}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    placeholder={`Seleccione ${field.label}`}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name, e.target.value)}
                                    size="lg"
                                    className="p-2"
                                >
                                    {
                                        field.options && field.options.map((option) => (
                                            <SelectItem key={option.id} value={option.id}>
                                                {option.label}
                                            </SelectItem>
                                        ))
                                    }
                                </Select>
                            );
                        }

                        return null;
                    })
                }

                <br />

                <Button size="lg" type="submit" className="mr-2">Aceptar</Button>
                <Button size="lg" type="button" color="danger" onClick={Cancel}>Cancelar</Button>

            </form>
            </>
        }
        />
    );
}

export default FormStructureComponent;