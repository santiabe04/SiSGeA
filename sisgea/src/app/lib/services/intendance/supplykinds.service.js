'use server'

/*getAllSupplyKinds*/
export const getAllSupplyKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds')
    const result = await resultOri.json()
    return result.res
}

/*newSupplyKind*/
export const newSupplyKind = async (supplyKind) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds', {
        method: 'POST',
        body: JSON.stringify(supplyKind),
        headers: {
            'Content-Type':'application/json',
        }
    })
    const result = await resultOri.json()
    return result.res
}