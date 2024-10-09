'use server'

import FormStructureComponent from "@/app/ui/FormStructure"
import InventoryFormComponent from "@/app/ui/InventoryForm"

async function NewInventoryPage() {
  const checks = [
    {fieldName:"Nombre",value:"",top:45},
    {fieldName:"Cantidad",value:0.00,top:99999999999999999999.99}
  ]

  const fields = [
    {name:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"Cantidad",type:"float",startContent:"",options:null,isRequired:true}
  ]

  const submit = async () => {
    'use server'
    return null
  }

  const cancel = async () => {
    'use server'
    return null
  }

  return (
    // <InventoryFormComponent />
    <FormStructureComponent title="Nuevo Inventario" checks={checks} fields={fields} submitFallback={submit} cancelFallback={cancel} />
  )
}

export default NewInventoryPage