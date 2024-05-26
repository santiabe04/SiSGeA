'use server'

/* GETS */
/*getAllEvents*/
export const getAllEvents = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/*getAllEnabledEvents*/
export const getAllEnabledEvents = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/* POSTS */
/*newEvent*/
export const newEvent = async (params) => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*editEvent*/
export const editEvent = async (params) => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/edit', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*deleteEvent*/
export const deleteEvent = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/delete', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}