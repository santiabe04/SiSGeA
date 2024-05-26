import { getAllEnabledCurrencies } from "@/app/lib/services/finance/currencies.service";
import { getAllEnabledWallets } from "@/app/lib/services/finance/wallets.service";
import FinanceDashboardComponent from "@/app/ui/FinanceDashboard";

export const metadata = {
  title: 'SiSGeA - Finanzas',
}

async function FinancesPage() {

  const currenciesList = await getAllEnabledCurrencies();
  const walletList = await getAllEnabledWallets();
  
  return(
    <>
      <FinanceDashboardComponent
        currenciesList={currenciesList}
        walletList={walletList}
      />
    </>
  );
}

export default FinancesPage;