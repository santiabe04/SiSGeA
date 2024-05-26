'use server'

import { getAllEnabledMeasurementUnits } from "@/app/lib/services/intendance/measurementunits.service";
import { newSupplyKind } from "@/app/lib/services/intendance/supplykinds.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewSupplyKindPage() {
  const measurementUnitsDBList = await getAllEnabledMeasurementUnits();
  const measurementUnitsList = measurementUnitsDBList.map((field) => ({ id: field.id, label: field.name }));

  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false},
    {name:"measurement_unit",label:"Unidad de Medida",type:"select",startContent:"",options:measurementUnitsList,isRequired:true}
  ];

  return (
    <FormStructureComponent title="Nueva Categoría de Artículo" fields={fields} fallbackRoute={"/private/intendance"} submitAPICall={newSupplyKind} />
  );
}

export default NewSupplyKindPage;