import { deleteMovementKind, getAllEnabledMovementKinds } from "@/app/lib/services/finance/movementkinds.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Finanzas - Consultar Categorías de Movimiento',
}

async function ConsultMovementKindsPage() {

    const kinds = await getAllEnabledMovementKinds();

    const formattedData = kinds.map(item => ({
        ...item
    }));

    const columns = [
        {key:"name",label:"NOMBRE"},
        {key:"detail",label:"DETALLE"},
        {key:"edit",label:"EDITAR"},
        {key:"delete",label:"ELIMINAR"}
    ];

    return (
        <>
            <StructureComponent
                title="Consultar Categorías de Movimiento"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Categorías de Movimiento"} columns={columns} deleteAPICall={deleteMovementKind} />)}
            />
        </>
    );
}

export default ConsultMovementKindsPage;