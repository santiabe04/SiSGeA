import { getAllCurrencies } from "@/app/lib/services/finance/currencies.service";
import { getAllMovementKinds } from "@/app/lib/services/finance/movementkinds.service";
import { getAllMovements } from "@/app/lib/services/finance/movements.service";
import { getAllWallets } from "@/app/lib/services/finance/wallets.service";
import StructureComponent from "@/app/ui/Structure";
import TableComponent from "@/app/ui/Table";

export const metadata = {
    title: 'SiSGeA - Finanzas - Consultar Movimientos',
}

async function ConsultMovementPage() {

    const formatType = (type) => {
        return `${type == 1 ? "Entrada" : "Salida"}`;
    };

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const movements = await getAllMovements();
    const currencies = await getAllCurrencies();
    const wallets = await getAllWallets();
    const kinds = await getAllMovementKinds();

    const formatCurrency = (currency) => {
        const currencyMatch = currencies.find(x => x.id == currency);
        return `${currencyMatch.name}`;
    };

    const formatWallet = (wallet) => {
        const walletMatch = wallets.find(x => x.id == wallet);
        return `${walletMatch.name}`;
    };

    const formatKind = (kind) => {
        const kindMatch = kinds.find(x => x.id == kind);
        return `${kindMatch.name}`;
    };

    const formattedData = movements.map(item => ({
        ...item,
        amount: `$ ${item.amount}`,
        type: formatType(item.type),
        datetime: formatDate(item.datetime),
        currency: formatCurrency(item.currency),
        wallet: formatWallet(item.wallet),
        kind: formatKind(item.kind)
    }));

    const columns = [
        {key:"name",label:"NOMBRE"},
        {key:"detail",label:"DETALLE"},
        {key:"amount",label:"MONTO"},
        {key:"type",label:"TIPO"},
        {key:"datetime",label:"FECHA"},
        {key:"currency",label:"DIVISA"},
        {key:"wallet",label:"CUENTA"},
        {key:"kind",label:"CATEGORÍA"}
    ];

    return (
        <>
            <StructureComponent
                title="Consultar Movimientos"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Movimientos"} columns={columns} />)}
            />
        </>
    );
}

export default ConsultMovementPage;