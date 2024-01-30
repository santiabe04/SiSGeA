import { CardCurrencyBalance } from "@/app/ui/Card"
import StructureCardComponent from "@/app/ui/StructureCard"

export const metadata = {
    title: 'SiSGeA - Finanzas',
}

function FinancesPage() {
  const list = []

  return (
    <>
      <StructureCardComponent
        title="Balances por Divisa"
        content=
        {
          <>
            {
              list && list.length > 0 && list.map((item, index) => (
                <CardCurrencyBalance
                    item={item}
                    key={index}
                />
              ))
            }
            {
              !list || list.length <= 0 && (<h1>No hay divisas cargadas</h1>)
            }
          </>
        }
      />
    </>
  )
}

export default FinancesPage