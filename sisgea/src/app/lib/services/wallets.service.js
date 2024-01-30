/*getAllWallets*/
export const getAllWallets = async () => {
    const resultOri = await fetch('http://localhost:3000/api/wallets')
    const result = await resultOri.json()
    return result.res
}