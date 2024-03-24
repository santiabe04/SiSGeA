'use server'

/* GETS */
/*getAllEvents*/
export const getAllEvents = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events')
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
    })
    const result = await resultOri.json()
    return result.res
}