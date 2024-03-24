'use server'

/*getAllEventKinds*/
export const getAllEventKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/calendar/events/kinds')
    const result = await resultOri.json()
    return result.res
}