'use server'

/*getAllInventoryLocations*/
export const getAllInventoryLocations = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*getAllEnabledInventoryLocations*/
export const getAllEnabledInventoryLocations = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*newInventoryLocation*/
export const newInventoryLocation = async (inventoryLocation) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations', {
        method: 'POST',
        body: JSON.stringify(inventoryLocation),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*deleteInventoryLocation*/
export const deleteInventoryLocation = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/locations/delete', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}