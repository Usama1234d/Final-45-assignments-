// Assignment 24
// Equality and Inequality with string
// Tests for equality and inequality with strings
// Equality and Inequality
let car = 'Honda';
let bike = 'Honda';
console.log(car === bike); // output True.
console.log(car !== bike); // output False
// Lower Case Sensitive
let transportation1 = 'AeroPlaNe';
let transportation2 = 'aeroplane';
if (transportation1.toLowerCase() === transportation2.toLowerCase()) {
    console.log(true); // Output True
}
else
    (transportation1.toLowerCase() !== transportation2.toLowerCase());
{
    console.log(false); // Output False
}
// Numerical tests equality and inequality 
let num1 = 234;
let num2 = 23445;
console.log(num1 === num2); // output False
console.log(num1 !== num2); // output  True 
console.log(num1 < num2); // output true
console.log(num1 > num2); // output false 
// Numeric Test - with operators 
let my_age = 25;
console.log("Eligible for Aritificial Intelligence Course"); // output True
console.log(my_age >= 20 && my_age <= 45 || my_age !== 23); // given the range of age by using Logical Operators
console.log("Not Eligible for Aritificial Intelligence Course"); // output False 
console.log(my_age >= 50 && my_age <= 20);
//  Testing if item is in the array
let ramzan_dishes = ["Biryani", "Kung Pao Chicken", "Nihari", "Junk Foods"];
console.log(ramzan_dishes.includes("Biryani")); // output true
console.log(!ramzan_dishes.includes("Biryani")); // output false
// Testing if item is not in the array
let atm_pin = [4];
console.log("Define the ATM PIN as an array of numbers, ensuring it's 4 digits long");
console.log(atm_pin.length >= 9); // Output False 
console.log(atm_pin.length != 4); // Output True 
export {};
