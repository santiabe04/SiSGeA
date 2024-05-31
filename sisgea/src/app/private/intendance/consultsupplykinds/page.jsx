import { getAllMeasurementUnits } from "@/app/lib/services/intendance/measurementunits.service";
import { deleteSupplyKind, getAllEnabledSupplyKinds } from "@/app/lib/services/intendance/supplykinds.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Intendencia - Consultar Categorías de Artículos',
}

async function ConsultSupplyKindsPage() {

    const supplykinds = await getAllEnabledSupplyKinds();
    const measurementUnits = await getAllMeasurementUnits();

    const formatMeasurementUnits = (measurementUnit) => {
        const measurementUnityMatch = measurementUnits.find(x => x.id == measurementUnit);
        return `${measurementUnityMatch.name}`;
    }

    const formattedData = supplykinds.map(item => ({
        ...item,
        measurement_unit: formatMeasurementUnits(item.measurement_unit)
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