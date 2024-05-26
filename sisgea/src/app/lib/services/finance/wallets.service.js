'use server'

/*getAllWallets*/
export const getAllWallets = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/wallets', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/*getAllEnabledWallets*/
export const getAllEnabledWallets = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/wallets/enabled', { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}

/*newWallet*/
export const newWallet = async (wallet) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/wallets', {
        method: 'POST',
        body: JSON.stringify(wallet),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' })
    const result = await resultOri.json()
    return result.res
}