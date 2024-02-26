import { getAllCurrencies } from "@/app/lib/services/currencies.service"
import { getAllWallets } from "@/app/lib/services/wallets.service"
import FinanceDashboardComponent from "@/app/ui/FinanceDashboard"

export const metadata = {
  title: 'SiSGeA - Finanzas',
}

async function FinancesPage() {
  const currenciesList = await getAllCurrencies()
  const walletList = await getAllWallets()
  
  return(
    <>
      <FinanceDashboardComponent
        currenciesList={currenciesList}
        walletList={walletList}
      />
    </>
  )
}

export default FinancesPage