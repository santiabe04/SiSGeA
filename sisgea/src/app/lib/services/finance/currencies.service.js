'use server'

/*getAllCurrencies*/
export const getAllCurrencies = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*getAllEnabledCurrencies*/
export const getAllEnabledCurrencies = async () => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies/enabled', { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*newCurrency*/
export const newCurrency = async (currency) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies', {
        method: 'POST',
        body: JSON.stringify(currency),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result.res;
}

/*deleteCurrency*/
export const deleteCurrency = async (id) => {
    const resultOri = await fetch('http://localhost:3000/api/finance/currencies/delete', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type':'application/json',
        }
    }, { cache: 'no-store' });
    const result = await resultOri.json();
    return result;
}