import { getAllEventKinds } from "../lib/services/events/eventskinds.service"
import NewEventFormComponent from "./NewEventForm"

async function NewEventComponent() {
    const kinds = await getAllEventKinds()

    return (
        <NewEventFormComponent kinds={kinds} />
    )
}

export default NewEventComponent