'use server'

/*getAllInventoryLocations*/
export const getAllInventoryLocations = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations')
    const result = await resultOri.json()
    return result.res
}