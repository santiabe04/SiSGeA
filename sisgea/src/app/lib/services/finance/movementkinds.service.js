'use server'

/*getAllMovementKinds*/
export const getAllMovementKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/kinds', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/*getAllEnabledMovementKinds*/
export const getAllEnabledMovementKinds = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/kinds/enabled', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/*newMovementKind*/
export const newMovementKind = async (movementKind) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/kinds', {
        method: 'POST',
        body: JSON.stringify(movementKind),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}