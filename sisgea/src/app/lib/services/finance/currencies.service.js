'use server'

/*getAllCurrencies*/
export const getAllCurrencies = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies')
    const result = await resultOri.json()
    return result.res
}

/*newCurrency*/
export const newCurrency = async (currency) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies', {
        method: 'POST',
        body: JSON.stringify(currency),
        headers: {
            'Content-Type':'application/json',
        }
    })
    const result = await resultOri.json()
    return result.res
}