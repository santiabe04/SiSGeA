import { deleteSupplyKind } from "@/app/lib/services/intendance/supplykinds.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Intendencia - Consultar Categorías de Artículos',
}

async function ConsultSupplyKindsPage() {

    const formattedData = events.map(item => ({
        ...item
    }));

    const columns = [
        {key:"name",label:"NOMBRE"},
        {key:"detail",label:"DETALLE"},
        {key:"measurement_unit",label:"UNIDAD DE MEDIDA"},
        {key:"edit",label:"EDITAR"},
        {key:"delete",label:"ELIMINAR"}
    ];

    return (
        <>
            <StructureComponent
                title="Consultar Categorías de Artículos"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Categorías de Artículos"} columns={columns} deleteAPICall={deleteSupplyKind} />)}
            />
        </>
    );
}

export default ConsultSupplyKindsPage;