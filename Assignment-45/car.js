"use strict";
// Assignment-45
Object.defineProperty(exports, "__esModule", { value: true });
function automaticCar(manufacturer, model, ...differntOption) {
    const carSpecification = Object.assign({ manufacturer,
        model }, Object.assign({}, ...differntOption));
    return carSpecification;
}
;
let answer = automaticCar('Toyota', 'Yaris', { color: 'White' }, { features: ['Navigation', 'Fuel Average'] });
console.log(answer);
