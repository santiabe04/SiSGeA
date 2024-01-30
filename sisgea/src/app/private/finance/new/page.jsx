import { getAllCurrencies } from "@/app/lib/services/currencies.service"
import { getAllKinds } from "@/app/lib/services/movementkinds.service"
import { getAllWallets } from "@/app/lib/services/wallets.service"
import MovementFormComponent from "@/app/ui/MovementForm"

export const metadata = {
    title: 'SiSGeA - Finanzas - Nuevo Movimiento',
}

async function NewMovementPage() {
  /*Get Data from db*/
  /*Currencies*/
  const currencies = await getAllCurrencies()
  const wallets = await getAllWallets()
  const kinds = await getAllKinds()

  return (
    <MovementFormComponent currencies={currencies} wallets={wallets} kinds={kinds}/>
  )
}

export default NewMovementPage