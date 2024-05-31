'use server'

/*getAllEventKinds*/
export const getAllEventKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/kinds', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*getAllEnabledEventKinds*/
export const getAllEnabledEventKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/kinds/enabled', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/* POSTS */
/*newEventKind*/
export const newEventKind = async (params) => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/kinds', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*deleteEventKind*/
export const deleteEventKind = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/kinds/delete', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}