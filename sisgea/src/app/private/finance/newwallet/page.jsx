'use server'

import { getAllEnabledCurrencies } from "@/app/lib/services/finance/currencies.service";
import { newWallet } from "@/app/lib/services/finance/wallets.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewWalletPage() {
  const currenciesDBList = await getAllEnabledCurrencies();
  const currenciesList = currenciesDBList.map((field) => ({ id: field.id, label: field.name }));

  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"currency",label:"Divisa",type:"select",startContent:"",options:currenciesList,isRequired:true}
  ];

  return (
    <FormStructureComponent title="Nueva Cuenta" fields={fields} fallbackRoute={"/private/finance"} submitAPICall={newWallet} />
  );
}

export default NewWalletPage;