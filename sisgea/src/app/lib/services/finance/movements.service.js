'use server'

/* GETS */
/*getAllMovements*/
export const getAllMovements = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/movements', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/* POSTS */
/*newMovement*/
export const newMovement = async (movement) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/movements', {
        method: 'POST',
        body: JSON.stringify(movement),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}