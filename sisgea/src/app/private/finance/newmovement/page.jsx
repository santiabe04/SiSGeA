'use server'

import { getAllWallets } from "@/app/lib/services/finance/wallets.service";
import { getAllMovementKinds } from "@/app/lib/services/finance/movementkinds.service";
import { newMovement } from "@/app/lib/services/finance/movements.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewMovementPage() {
  const typesList = [
    { id: 0, label: "Salida" },
    { id: 1, label: "Entrada" }
  ];
  const walletsDBList = await getAllWallets();
  const walletsList = walletsDBList.map((field) => ({ id: field.id, label: field.name }));
  const kindsDBList = await getAllMovementKinds();
  const kindsList = kindsDBList.map((field) => ({ id: field.id, label: field.name }));

  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false},
    {name:"amount",label:"Monto",type:"float",startContent:"$",options:null,isRequired:true},
    {name:"type",label:"Tipo",type:"select",startContent:"",options:typesList,isRequired:true},
    {name:"wallet",label:"Cuenta",type:"select",startContent:"",options:walletsList,isRequired:true},
    {name:"kind",label:"Categoría",type:"select",startContent:"",options:kindsList,isRequired:true}
  ];

  return (
    <FormStructureComponent title="Nuevo Movimiento" fields={fields} fallbackRoute={"/private/finance"} submitAPICall={newMovement} />
  );
}

export default NewMovementPage;