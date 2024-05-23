'use server'

/*getAllSupplyKinds*/
export const getAllSupplyKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/supplyKinds')
    const result = await resultOri.json()
    return result.res
}