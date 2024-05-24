'use server'

import { newEventKind } from "@/app/lib/services/calendar/eventskinds.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewEventKindPage() {
  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false},
  ];

  return (
    <FormStructureComponent title="Nueva Categoría de Evento" fields={fields} fallbackRoute={"/private/calendar/events"} submitAPICall={newEventKind} />
  );
}

export default NewEventKindPage;