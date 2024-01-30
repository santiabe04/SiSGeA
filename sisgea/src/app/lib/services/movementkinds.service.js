/*getAllKinds*/
export const getAllKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/movementkinds')
    const result = await resultOri.json()
    return result.res
}