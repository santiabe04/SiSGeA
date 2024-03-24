'use server'

/*getAllEventKinds*/
export const getAllEventKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/events/kinds')
    const result = await resultOri.json()
    return result.res
}