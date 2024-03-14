// Assignment 18   
// Favoruite 05 countries list (storing in a single array)

let favourite_countries : string[] = [

    "Germany",
    "Australia",
    "United Arab Emirates",
    "Turkey",
    "China"
];

// Printing in its Original Order
console.log("Original Order: ", favourite_countries);

// Priniting in Alphabatical Order
console.log("Alphabatical Order: ", [...favourite_countries].sort());

// Again | Original Order
console.log("Original Order: ", favourite_countries);

// Reversal Alphbatical order
console.log("Reverse Alphabatical Order:", [...favourite_countries].sort().reverse());

// Again | Original Order
console.log("Original Order: ", favourite_countries);

// Reverse Order
console.log("Reverse Order: ", favourite_countries.reverse())

// Change the order in Original Order from Reverse Order
console.log("Original Order:", favourite_countries.reverse());

// Sorting Array in Alphabatical Order
console.log("Alphabatical Order: ", favourite_countries.sort());

// Sorting Array in Reverse Alphabatical Order
console.log("Reverse Alphabatical Order: ", favourite_countries.reverse());





