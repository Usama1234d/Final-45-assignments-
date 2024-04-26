// Assignment-45

function automaticCar(manufacturer: string, model: string, ...differntOption : { [key: string] : any} [] ):
Object {
    const carSpecification = {
        manufacturer,
        model,
        ...Object.assign({}, ...differntOption)
    }
    return carSpecification;

};

let answer = automaticCar ('Toyota', 'Yaris', {color: 'White'}, {features: ['Navigation', 'Fuel Average']});

console.log(answer);
