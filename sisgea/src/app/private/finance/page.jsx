import { getAllCurrencies } from "@/app/lib/services/currencies.service"
import { getAllWallets } from "@/app/lib/services/wallets.service"
import { CardCurrencyBalance } from "@/app/ui/Card"
import StructureCardComponent from "@/app/ui/StructureCard"

export const metadata = {
    title: 'SiSGeA - Finanzas',
}

async function FinancesPage() {
  const currenciesList = await getAllCurrencies()
  const walletList = await getAllWallets()

  return (
    <>
      <StructureCardComponent
        title="Balances por Divisa"
        content=
        {
          <>
            {
              currenciesList && currenciesList.length > 0 && currenciesList.map((currency, index) => (
                <CardCurrencyBalance
                    currency={currency}
                    wallets={walletList.find(x => x.currency = currency.id)}
                    key={index}
                />
              ))
            }
            {
              !currenciesList || currenciesList.length <= 0 && (<h1>No hay divisas cargadas</h1>)
            }
          </>
        }
      />
    </>
  )
}

export default FinancesPage