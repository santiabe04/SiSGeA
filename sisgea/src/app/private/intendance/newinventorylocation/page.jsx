'use server'

import { newInventoryLocation } from "@/app/lib/services/intendance/inventorylocations.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewInventoryLocationPage() {
  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false}
  ];

  return (
    <FormStructureComponent title="Nueva Ubicación de Inventario" fields={fields} fallbackRoute={"/private/intendance"} submitAPICall={newInventoryLocation} />
  );
}

export default NewInventoryLocationPage;