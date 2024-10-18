'use server'

/* GETS */
/*getAllInventory*/
export const getAllInventory = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*getAllEnabledInventory*/
export const getAllEnabledInventory = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory/enabled', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/* POSTS */
/*newInventory*/
export const newInventory = async (inventory) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory', {
        method: 'POST',
        body: JSON.stringify(inventory),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*editInventory*/
export const editInventory = async (params,id) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory/edit', {
        method: 'POST',
        body: JSON.stringify({params,id}),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result;
}

/*deleteInventory*/
export const deleteInventory = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory/delete', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*getInventoryByID*/
export const getInventoryByID = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory/byId', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}