/*getAllCurrencies*/
export const getAllCurrencies = async () => {
    const resultOri = await fetch('http://localhost:3000/api/currencies')
    const result = await resultOri.json()
    return result.res
}