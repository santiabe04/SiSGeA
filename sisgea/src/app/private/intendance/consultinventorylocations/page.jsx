import { deleteInventoryLocation } from "@/app/lib/services/intendance/inventorylocations.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Intendencia - Consultar Ubicaciones de Inventario',
}

async function ConsultInventoryLocationsPage() {

    const formattedData = events.map(item => ({
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
                title="Consultar Ubicaciones de Inventario"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Ubicaciones de Inventario"} columns={columns} deleteAPICall={deleteInventoryLocation} />)}
            />
        </>
    );
}

export default ConsultInventoryLocationsPage;