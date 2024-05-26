import { deleteEventKind } from "@/app/lib/services/calendar/eventskinds.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Calendario - Consultar Categorías de Eventos',
}

async function ConsultEventKindsPage() {

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
                title="Consultar Categorías de Eventos"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Categorías de Eventos"} columns={columns} deleteAPICall={deleteEventKind} />)}
            />
        </>
    );
}

export default ConsultEventKindsPage;