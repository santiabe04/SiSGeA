'use server'

import { newMovementKind } from "@/app/lib/services/finance/movementkinds.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewMovementPage() {
  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false},
  ];

  return (
    <FormStructureComponent title="Nueva Categoría de Movimiento" fields={fields} fallbackRoute={"/private/finance"} submitAPICall={newMovementKind} />
  );
}

export default NewMovementPage;