'use server'

/*getAllInventory*/
export const getAllInventory = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory');
    const result = await resultOri.json();
    return result.res;
}

/*newInventory*/
export const newInventory = async (inventory) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/inventory', {
        method: 'POST',
        body: JSON.stringify(inventory),
        headers: {
            'Content-Type':'application/json',
        }
    });
    const result = await resultOri.json();
    return result.res;
}