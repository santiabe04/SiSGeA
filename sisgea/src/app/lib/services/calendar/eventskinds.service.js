'use server'

/*getAllEventKinds*/
export const getAllEventKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/kinds')
    const result = await resultOri.json()
    return result.res
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
    })
    const result = await resultOri.json()
    return result.res
}