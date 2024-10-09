'use server'

/*getAllSupplyKinds*/
export const getAllSupplyKinds = async () => {
<<<<<<< Updated upstream
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*getAllEnabledSupplyKinds*/
export const getAllEnabledSupplyKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds/enabled', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*newSupplyKind*/
export const newSupplyKind = async (supplyKind) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds', {
        method: 'POST',
        body: JSON.stringify(supplyKind),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*deleteSupplyKind*/
export const deleteSupplyKind = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds/delete', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
=======
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds')
    const result = await resultOri.json()
    return result.res
>>>>>>> Stashed changes
}