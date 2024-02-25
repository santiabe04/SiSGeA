/*getAllWallets*/
export const getAllWallets = async () => {
    const resultOri = await fetch('http://localhost:3000/api/wallets')
    const result = await resultOri.json()
    return result.res
}

/*getWalletsByCurrency*/
export const getWalletsByCurrency = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/wallets',{
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    })
    const result = await resultOri.json()
    return result.res
}