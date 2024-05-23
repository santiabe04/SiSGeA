'use server'

import { getAllSupplyKinds } from "@/app/lib/services/intendance/supplykinds.service";
import { getAllInventoryLocations } from "@/app/lib/services/intendance/inventorylocations.service";
import { newInventory } from "@/app/lib/services/intendance/inventory.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewInventoryPage() {
  const supplyKindsDBList = await getAllSupplyKinds();
  const supplyKindsList = supplyKindsDBList.map((field) => ({ id: field.id, label: field.name }));
  const inventoryLocationsDBList = await getAllInventoryLocations();
  const inventoryLocationsList = inventoryLocationsDBList.map((field) => ({ id: field.id, label: field.name }));

  const fields = [
    {name:"supply_kind",label:"Artículo",type:"select",startContent:"",options:supplyKindsList,isRequired:true},
    {name:"location",label:"Ubicación",type:"select",startContent:"",options:inventoryLocationsList,isRequired:true},
    {name:"quantity",label:"Cantidad",type:"float",startContent:"",options:null,isRequired:true}
  ];

  return (
    <FormStructureComponent title="Nuevo Inventario" fields={fields} fallbackRoute={"/private/intendance"} submitAPICall={newInventory} />
  );
}

export default NewInventoryPage;