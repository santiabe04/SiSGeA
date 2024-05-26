import { deleteInventory, editInventory, getAllEnabledInventory } from "@/app/lib/services/intendance/inventory.service";
import { getAllInventoryLocations } from "@/app/lib/services/intendance/inventorylocations.service";
import { getAllSupplyKinds } from "@/app/lib/services/intendance/supplykinds.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Intendencia - Consultar Inventario',
}

async function ConsultInventoryPage() {
    const formatDateTime = (datetime) => {
        if(datetime) {
            const date = new Date(datetime);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
        }
        else {
            return datetime;
        }
    }

    const inventory = await getAllEnabledInventory();
    const supplies = await getAllSupplyKinds();
    const inventoryLocations = await getAllInventoryLocations();

    const formatSupplies = (supply) => {
        const supplyMatch = supplies.find(x => x.id == supply);
        return `${supplyMatch.name}`;
    }

    const formatInventoryLocations = (inventoryLocation) => {
        const inventoryLocationMatch = inventoryLocations.find(x => x.id == inventoryLocation);
        return `${inventoryLocationMatch.name}`;
    }

    const formattedData = inventory.map(item => ({
        ...item,
        supply_kind: formatSupplies(item.supply_kind),
        location: formatInventoryLocations(item.location),
        update_date: formatDateTime(item.update_date)
    }));

    const columns = [
        {key:"supply_kind",label:"ARTÍCULO"},
        {key:"location",label:"UBICACIÓN"},
        {key:"quantity",label:"STOCK"},
        {key:"update_date",label:"ÚLTIMA FECHA DE ACTUALIZACIÓN"},
        {key:"edit",label:"EDITAR"},
        {key:"delete",label:"ELIMINAR"}
    ];

    return (
        <>
            <StructureComponent
                title="Consultar Inventario"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Inventario"} columns={columns} editAPICall={editInventory} deleteAPICall={deleteInventory} />)}
            />
        </>
    );
}

export default ConsultInventoryPage;