
import { deleteEvent, editEvent, getAllEvents } from "@/app/lib/services/calendar/events.service"
import { getAllEventKinds } from "@/app/lib/services/calendar/eventskinds.service"
import StructureComponent from "@/app/ui/Structure"
import TableComponent from "@/app/ui/Table"

export const metadata = {
    title: 'SiSGeA - Calendario - Consultar Eventos',
}

async function ConsultEventsPage() {
    const formatDate = (datetime) => {
        if(datetime) {
            const date = new Date(datetime)
            const day = String(date.getDate()).padStart(2, '0')
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const year = date.getFullYear()
            return `${day}-${month}-${year}`
        }
        else {
            return datetime
        }
    }

    const formatTime = (param) => {
        var time
        if(param) {
            time = param.slice(0,-3)
        }
        else {
            time = param
        }
        return time
    }

    const events = await getAllEvents()
    const kinds = await getAllEventKinds()

    const formatKind = (kind) => {
        const kindMatch = kinds.find(x => x.id == kind)
        return `${kindMatch.name}`
    }

    const formattedData = events.map(item => ({
        ...item,
        date: formatDate(item.date),
        date_end: formatDate(item.date_end),
        time: formatTime(item.time),
        time_end: formatTime(item.time_end),
        kind: formatKind(item.kind)
    }))

    const columns = [
        {key:"name",label:"NOMBRE"},
        {key:"detail",label:"DETALLE"},
        {key:"date",label:"FECHA"},
        {key:"date_end",label:"FECHA FINALIZACIÓN"},
        {key:"time",label:"HORA"},
        {key:"time_end",label:"HORA FINALIZACIÓN"},
        {key:"kind",label:"CATEGORÍA"},
        {key:"edit",label:"EDITAR"},
        {key:"delete",label:"ELIMINAR"}
    ]

    return (
        <>
            <StructureComponent
                title="Consultar Eventos"
                content={(<TableComponent data={formattedData} rowsPerPage={10} title={"Consultar Eventos"} columns={columns} editAPICall={editEvent} deleteAPICall={deleteEvent} />)}
            />
        </>
    )
}

export default ConsultEventsPage