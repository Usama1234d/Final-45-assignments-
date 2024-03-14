// Assignment 18   
// Favoruite 05 countries list (storing in a single array)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favourite_countries = [
    "Germany",
    "Australia",
    "United Arab Emirates",
    "Turkey",
    "China"
];
// Printing in its Original Order
console.log("Original Order: ", favourite_countries);
// Priniting in Alphabatical Order
console.log("Alphabatical Order: ", __spreadArray([], favourite_countries, true).sort());
// Again | Original Order
console.log("Original Order: ", favourite_countries);
// Reversal Alphbatical order
console.log("Reverse Alphabatical Order:", __spreadArray([], favourite_countries, true).sort().reverse());
// Again | Original Order
console.log("Original Order: ", favourite_countries);
// Reverse Order
console.log("Reverse Order: ", favourite_countries.reverse());
// Change the order in Original Order from Reverse Order
console.log("Original Order:", favourite_countries.reverse());
// Sorting Array in Alphabatical Order
console.log("Alphabatical Order: ", favourite_countries.sort());
// Sorting Array in Reverse Alphabatical Order
console.log("Reverse Alphabatical Order: ", favourite_countries.reverse());
