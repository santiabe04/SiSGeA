'use server'

/*getAllInventoryLocations*/
export const getAllInventoryLocations = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations')
    const result = await resultOri.json()
    return result.res
}

/*newInventoryLocation*/
export const newInventoryLocation = async (inventoryLocation) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations', {
        method: 'POST',
        body: JSON.stringify(inventoryLocation),
        headers: {
            'Content-Type':'application/json',
        }
    })
    const result = await resultOri.json()
    return result.res
}