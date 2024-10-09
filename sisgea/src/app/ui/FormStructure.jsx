'use client'

<<<<<<< Updated upstream
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import StructureComponent from "./Structure";
import { useRouter } from "next/navigation";

function FormStructureComponent({ title, fields, fallbackRoute, submitAPICall, editID }) {
    const router = useRouter();

    const values = fields.map((field) => ({ name: field.name, type: field.type, isRequired: field.isRequired, value: field.value || null }));

    const changeHandler = (fieldName, value) => {
        const fieldIndex = fields.findIndex(x => x.name == fieldName);

        if (fieldIndex !== -1) {
            values[fieldIndex].value = value;
        }
    }

    const checkEdited = () => {
        for(var i = 0; i < values.length; i++) {
            const fieldIndex = fields.findIndex(x => x.name == values[i].name);
            if(fields[fieldIndex].value != values[i].value) {
                return true;
            }
        }

        return false;
    }

    const Submit = async (e) => {
        e.preventDefault();

        var result;
        var notEdited = false;
        if(editID) {
            if(checkEdited()) {
                result = await submitAPICall(values,editID);
            }
            else {
                notEdited = true;
            }
        }
        else {
            result = await submitAPICall(values);
        }
 
        if(notEdited) {
            alert("No se modificaron los valores");
        }
        else if(result.res.status == 200) {
            alert("La operación finalizó con éxito");
            router.push(fallbackRoute);
        }
        else {
            alert("Ocurrió un error: " + result.res.res);
        }
    }

    const Cancel = (e) => {
        e.preventDefault();

        const response = confirm("Seguro que desea cancelar?");

        if (response) {
        router.push(fallbackRoute);
        }
=======
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import StructureComponent from "./Structure"

function FormStructureComponent({ title, checks, fields, submitFallback, cancelFallback }) {
    const values = fields.map((field) => ({ fieldName: field.name, value: null }))

    const checker = (fieldName) => {
        const checker = checks.find(x => x.fieldName == fieldName)
    }

    const changeHandler = (fieldName, value) => {
        const fieldIndex = fields.findIndex(x => x.fieldName == fieldName)

        if (fieldIndex !== -1) {
            values[fieldIndex].value = value
        }
    }

    const preSubmit = () => {
        /* Check With Checker and then Fallback */
        console.log(values)
>>>>>>> Stashed changes
    }

    return (
        <StructureComponent
        title={title}
        content=
        {
            <>
<<<<<<< Updated upstream
            <form onSubmit={Submit}>

                {
                    fields.map((field, index) => {
                        if (field.type === "text") {
                            return (
                                <Input
                                    key={field.label}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    placeholder={field.label}
                                    labelPlacement="outside"
                                    defaultValue={field.value || ""}
                                    onChange={e => changeHandler(field.name, e.target.value)}
=======
            <form onSubmit={preSubmit}>

                {
                    fields.map((field) => {
                        {
                            field.type == "text" && (
                                <Input
                                    isRequired={field.isRequired}
                                    label={field.name}
                                    placeholder={field.name}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name,e.target.value)}
>>>>>>> Stashed changes
                                    type="text"
                                    size="lg"
                                    className="p-2"
                                />
<<<<<<< Updated upstream
                            );
                        }

                        if (field.type === "textarea") {
                            return (
                                <Textarea
                                    key={field.label}
                                    label={field.label}
                                    placeholder={field.label}
                                    labelPlacement="outside"
                                    defaultValue={field.value || ""}
                                    onChange={e => changeHandler(field.name, e.target.value)}
=======
                            )
                        }
                        {
                            field.type == "detail" && (
                                <Textarea
                                    label={field.name}
                                    placeholder={field.name}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name,e.target.value)}
>>>>>>> Stashed changes
                                    type="text"
                                    size="lg"
                                    className="p-2"
                                />
<<<<<<< Updated upstream
                            );
                        }

                        if (field.type === "number" || field.type === "float") {
                            return (
                                <Input
                                    key={field.label}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    placeholder={field.type === "number" ? "0" : "0.00"}
                                    labelPlacement="outside"
                                    defaultValue={field.value || ""}
                                    onChange={e => changeHandler(field.name, e.target.value)}
=======
                            )
                        }
                        {
                            (field.type == "number" || field.type == "float") && (
                                <Input
                                    isRequired={field.isRequired}
                                    label={field.name}
                                    placeholder={field.type == "number" ? "0" : "0.00"}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name,e.target.value)}
>>>>>>> Stashed changes
                                    type="number"
                                    size="lg"
                                    className="p-2"
                                    startContent={field.startContent}
                                />
<<<<<<< Updated upstream
                            );
                        }

                        if (field.type === "date") {
                            return (
                                <Input
                                    key={field.label}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    labelPlacement="outside"
                                    defaultValue={field.value || ""}
                                    onChange={e => changeHandler(field.name, e.target.value)}
=======
                            )
                        }
                        {
                            field.type == "date" && (
                                <Input
                                    isRequired={field.isRequired}
                                    label={field.name}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name,e.target.value)}
>>>>>>> Stashed changes
                                    type="date"
                                    size="lg"
                                    className="p-2"
                                />
<<<<<<< Updated upstream
                            );
                        }

                        if (field.type === "time") {
                            return (
                                <Input
                                    key={field.label}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    labelPlacement="outside"
                                    defaultValue={field.value || ""}
                                    onChange={e => changeHandler(field.name, e.target.value)}
=======
                            )
                        }
                        {
                            field.type == "time" && (
                                <Input
                                    isRequired={field.isRequired}
                                    label={field.name}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name,e.target.value)}
>>>>>>> Stashed changes
                                    type="time"
                                    size="lg"
                                    className="p-2"
                                />
<<<<<<< Updated upstream
                            );
                        }

                        if (field.type === "select") {
                            return (
                                <Select
                                    key={field.label}
                                    isRequired={field.isRequired}
                                    label={field.label}
                                    placeholder={`Seleccione ${field.label}`}
                                    labelPlacement="outside"
                                    defaultSelectedKeys={field.value ? `["${field.value}"]` : "[1]"}
                                    onChange={e => changeHandler(field.name, e.target.value)}
=======
                            )
                        }
                        {
                            field.type == "select" && (
                                <Select
                                    isRequired={field.isRequired}
                                    label={field.name}
                                    placeholder={"Seleccione "+field.name}
                                    labelPlacement="outside"
                                    onChange={e => changeHandler(field.name,e.target.value)}
>>>>>>> Stashed changes
                                    size="lg"
                                    className="p-2"
                                >
                                    {
<<<<<<< Updated upstream
                                        field.options && field.options.map((option) => (
                                            <SelectItem key={option.id} value={option.id}>
                                                {option.label}
=======
                                        field.options.map((option) => (
                                            <SelectItem key={option.id} value={option.id}>
                                                {option.name}
>>>>>>> Stashed changes
                                            </SelectItem>
                                        ))
                                    }
                                </Select>
<<<<<<< Updated upstream
                            );
                        }

                        return null;
=======
                            )
                        }
>>>>>>> Stashed changes
                    })
                }

                <br />

                <Button size="lg" type="submit" className="mr-2">Aceptar</Button>
<<<<<<< Updated upstream
                <Button size="lg" type="button" color="danger" onClick={Cancel}>Cancelar</Button>
=======
                <Button size="lg" type="button" color="danger" onClick={cancelFallback}>Cancelar</Button>
>>>>>>> Stashed changes

            </form>
            </>
        }
        />
<<<<<<< Updated upstream
    );
}

export default FormStructureComponent;
=======
    )
}

export default FormStructureComponent
>>>>>>> Stashed changes
