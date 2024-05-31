'use server'

import { editEventKind, getEventKindById } from "@/app/lib/services/calendar/eventskinds.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function EditEventKindPage({ params }) {
  const { id } = params;
  const eventKind = await getEventKindById(id);

  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true,value:eventKind.res.res[0].name},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false,value:eventKind.res.res[0].detail}
  ];

  return (
    <FormStructureComponent title="Editar Categoría de Evento" fields={fields} fallbackRoute={"/private/calendar/events"} submitAPICall={editEventKind} editID={id}/>
  );
}

export default EditEventKindPage;