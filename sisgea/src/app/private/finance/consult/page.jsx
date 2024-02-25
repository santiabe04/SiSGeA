import MovementsTableComponent from "@/app/ui/MovementsTable"
import StructureComponent from "@/app/ui/Structure"

export const metadata = {
    title: 'SiSGeA - Finanzas - Consultar Movimientos',
}

async function ConsultMovementPage() {
    return (
        <>
            <StructureComponent
                title="Consultar Movimientos"
                content={(<MovementsTableComponent />)}
            />
        </>
    )
}

export default ConsultMovementPage