'use server'

/*getAllMeasurementUnits*/
export const getAllMeasurementUnits = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/measurementUnits');
    const result = await resultOri.json();
    return result.res;
}

/*getAllEnabledMeasurementUnits*/
export const getAllEnabledMeasurementUnits = async () => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/measurementUnits');
    const result = await resultOri.json();
    return result.res;
}

/*newMeasurementUnits*/
export const newMeasurementUnit = async (measurementunit) => {
    const resultOri = await fetch('http://localhost:3000/api/intendance/measurementUnits', {
        method: 'POST',
        body: JSON.stringify(measurementunit),
        headers: {
            'Content-Type':'application/json',
        }
    });
    const result = await resultOri.json();
    return result.res;
}