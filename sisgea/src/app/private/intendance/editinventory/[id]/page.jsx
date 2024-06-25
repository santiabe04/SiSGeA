'use server'

import { editInventory, getInventoryByID } from "@/app/lib/services/intendance/inventory.service";
import { getAllEnabledInventoryLocations } from "@/app/lib/services/intendance/inventorylocations.service";
import { getAllEnabledSupplyKinds } from "@/app/lib/services/intendance/supplykinds.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function EditInventoryPage({ params }) {
  const { id } = params;
  const inventory = await getInventoryByID(id);

  const supplyKindsDBList = await getAllEnabledSupplyKinds();
  const supplyKindsList = supplyKindsDBList.map((field) => ({ id: field.id, label: field.name }));
  const inventoryLocationsDBList = await getAllEnabledInventoryLocations();
  const inventoryLocationsList = inventoryLocationsDBList.map((field) => ({ id: field.id, label: field.name }));

  const fields = [
    {name:"supply_kind",label:"Artículo",type:"select",startContent:"",options:supplyKindsList,isRequired:true,value:inventory.res[0].supply_kind},
    {name:"location",label:"Ubicación",type:"select",startContent:"",options:inventoryLocationsList,isRequired:true,value:inventory.res[0].location},
    {name:"quantity",label:"Cantidad",type:"float",startContent:"",options:null,isRequired:true,value:inventory.res[0].quantity}
  ];

  return (
    <FormStructureComponent title={"Editar Inventario"} fields={fields} fallbackRoute={"/private/intendance"} submitAPICall={editInventory} editID={id} />
  );
}

export default EditInventoryPage;