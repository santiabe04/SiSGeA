'use server'

import { getAllEnabledEventKinds } from "@/app/lib/services/calendar/eventskinds.service";
import { newEvent } from "@/app/lib/services/calendar/events.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function NewEventPage() {
  const kindsDBList = await getAllEnabledEventKinds();
  const kindsList = kindsDBList.map((field) => ({ id: field.id, label: field.name }));

  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false},
    {name:"date",label:"Fecha",type:"date",startContent:"",options:null,isRequired:true},
    {name:"time",label:"Hora",type:"time",startContent:"",options:null,isRequired:true},
    {name:"date_end",label:"Fecha Finalización",type:"date",startContent:"",options:null,isRequired:false},
    {name:"time_end",label:"Hora Finalización",type:"time",startContent:"",options:null,isRequired:false},
    {name:"kind",label:"Categoría",type:"select",startContent:"",options:kindsList,isRequired:true}
  ];

  return (
    <FormStructureComponent title={"Nuevo Evento"} fields={fields} fallbackRoute={"/private/calendar/events"} submitAPICall={newEvent} />
  );
}

export default NewEventPage;