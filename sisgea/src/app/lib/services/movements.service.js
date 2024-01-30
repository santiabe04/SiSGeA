'use server'

/*getAllMovements*/
export const getAllMovements = async () => {
    const resultOri = await fetch('http://localhost:3000/api/movements')
    const result = await resultOri.json()
    return result.res
}

/*newMovement*/
export const newMovement = async (movement) => {
    const resultOri = await fetch('http://localhost:3000/api/movements', {
        method: 'POST',
        body: JSON.stringify(movement),
        headers: {
            'Content-Type':'application/json',
        }
    })
    const result = await resultOri.json()
    return result.res
}