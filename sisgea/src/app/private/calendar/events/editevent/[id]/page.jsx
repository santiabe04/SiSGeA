'use server'

import { editEvent, getEventById } from "@/app/lib/services/calendar/events.service";
import { getAllEnabledEventKinds } from "@/app/lib/services/calendar/eventskinds.service";
import FormStructureComponent from "@/app/ui/FormStructure";

async function EditEventPage({ params }) {
  const { id } = params;
  const event = await getEventById(id);

  const kindsDBList = await getAllEnabledEventKinds();
  const kindsList = kindsDBList.map((field) => ({ id: field.id, label: field.name }));

  const formatDate = (datetime) => {
    if(datetime) {
      const date = new Date(datetime)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${year}-${month}-${day}`
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

  const fields = [
    {name:"name",label:"Nombre",type:"text",startContent:"",options:null,isRequired:true,value:event.res.res[0].name},
    {name:"detail",label:"Detalle",type:"textarea",startContent:"",options:null,isRequired:false,value:event.res.res[0].detail},
    {name:"date",label:"Fecha",type:"date",startContent:"",options:null,isRequired:true,value:formatDate(event.res.res[0].date)},
    {name:"time",label:"Hora",type:"time",startContent:"",options:null,isRequired:true,value:formatTime(event.res.res[0].time)},
    {name:"date_end",label:"Fecha Finalización",type:"date",startContent:"",options:null,isRequired:false,value:formatDate(event.res.res[0].date_end)},
    {name:"time_end",label:"Hora Finalización",type:"time",startContent:"",options:null,isRequired:false,value:formatTime(event.res.res[0].time_end)},
    {name:"kind",label:"Categoría",type:"select",startContent:"",options:kindsList,isRequired:true,value:event.res.res[0].kind}
  ];

  return (
    <FormStructureComponent title={"Editar Evento"} fields={fields} fallbackRoute={"/private/calendar/events"} submitAPICall={editEvent} editID={id} />
  );
}

export default EditEventPage;