'use server'

/*getAllCurrencies*/
export const getAllCurrencies = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies')
    const result = await resultOri.json()
    return result.res
}