// Assignment 33

import { log } from "console"

let ordinal_numbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numbers of ordinal_numbers) {

    if (numbers === 1) {
        console.log(`${numbers}st`);  // 1st ordinal number 
    } else if (numbers === 2) {
        console.log(`${numbers}nd`); // 2nd ordinal number
    } else if (numbers === 3) {
        console.log(`${numbers}rd`); // 3rd ordinal number
    } else {
        console.log(`${numbers}th`); // 4th ...... 9th
        
    }
}