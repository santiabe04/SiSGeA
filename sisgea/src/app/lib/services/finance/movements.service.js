'use server'

/* GETS */
/*getAllMovements*/
export const getAllMovements = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/movements', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/* POSTS */
/*getMovementsBy*/
export const getMovementsBy = async (params) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/movements/by', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/*newMovement*/
export const newMovement = async (movement) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/movements', {
        method: 'POST',
        body: JSON.stringify(movement),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}