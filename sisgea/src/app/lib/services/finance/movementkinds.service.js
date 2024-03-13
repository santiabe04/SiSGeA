/*getAllMovementKinds*/
export const getAllMovementKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/kinds')
    const result = await resultOri.json()
    return result.res
}