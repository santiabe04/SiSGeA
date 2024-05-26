import { deleteMeasurementUnit } from "@/app/lib/services/intendance/measurementunits.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Intendencia - Consultar Unidades de Medida',
}

async function ConsultMeasurementUnitsPage() {

    const formattedData = events.map(item => ({
        ...item
    }));

    const columns = [
        {key:"name",label:"NOMBRE"},
        {key:"detail",label:"DETALLE"},
        {key:"short",label:"SIMBOLOGÍA"},
        {key:"edit",label:"EDITAR"},
        {key:"delete",label:"ELIMINAR"}
    ];

    return (
        <>
            <StructureComponent
                title="Consultar Unidades de Medida"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Unidades de Medida"} columns={columns} deleteAPICall={deleteMeasurementUnit} />)}
            />
        </>
    );
}

export default ConsultMeasurementUnitsPage;