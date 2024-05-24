'use server'

import { newCurrency } from "@/app/lib/services/finance/currencies.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewWalletPage() {
  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"iso",label:"ISO",type:"text",startContent:"",options:null,isRequired:true}
  ];

  return (
    <FormStructureComponent title="Nueva Divisa" fields={fields} fallbackRoute={"/private/finance"} submitAPICall={newCurrency} />
  );
}

export default NewWalletPage;