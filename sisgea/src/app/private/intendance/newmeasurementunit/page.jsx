'use server'

import { newMeasurementUnit } from "@/app/lib/services/intendance/measurementunits.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewMeasurementUnitPage() {
  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false},
    {name:"short",label:"Simbología",type:"text",startContent:"",options:null,isRequired:true}
  ];

  return (
    <FormStructureComponent title="Nueva Unidad de Medida" fields={fields} fallbackRoute={"/private/intendance"} submitAPICall={newMeasurementUnit} />
  );
}

export default NewMeasurementUnitPage;