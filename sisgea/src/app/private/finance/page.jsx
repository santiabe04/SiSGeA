import { getAllCurrencies } from "@/app/lib/services/currencies.service"
import { getAllWallets } from "@/app/lib/services/wallets.service"
import { CardCurrencyBalance } from "@/app/ui/CardCurrencyBalance"
import { CardWalletBalance } from "@/app/ui/CardWalletBalance"
import StructureCardComponent from "@/app/ui/StructureCard"

export const metadata = {
  title: 'SiSGeA - Finanzas',
}

async function FinancesPage() {
  const currenciesList = await getAllCurrencies()
  const walletList = await getAllWallets()

  const getBalance = (currency) => {
    let totalBalance = 0
    const wallets = walletList.filter(x => x.currency == currency)

    if(wallets.length > 0) {
      for (let i = 0; i < wallets.length; i++) {
        totalBalance += parseFloat(wallets[i].balance)
      }
    }

    return totalBalance = totalBalance.toFixed(2)
  }

  return (
    <StructureCardComponent
      content={[
        {title:"Balances por Divisa",content:(
          <>
            {
              currenciesList && currenciesList.length > 0 && currenciesList.map((currency, index) => (
                <CardCurrencyBalance
                  currency={currency}
                  balance={getBalance(currency.id)}
                  key={index}
                />
              ))
            }
            {
              !currenciesList || currenciesList.length <= 0 && (<h1>No hay divisas cargadas</h1>)
            }
          </>
        )},
        {title:"Balances por Cuenta",content:(
          <>
            {
              walletList && walletList.length > 0 && walletList.map((wallet, index) => (
                <CardWalletBalance
                  wallet={wallet}
                  currency={currenciesList.find(x => x.id === wallet.currency)?.iso || ''}
                  key={index}
                />
              ))
            }
            {
              !walletList || walletList.length <= 0 && (<h1>No hay cuentas cargadas</h1>)
            }
          </>
        )}
      ]}
      multiple
    />
  )
}

export default FinancesPage