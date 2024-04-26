"use strict";
// Assignment - 38
function describe_city(city, country = `Pakistan`) {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi');
describe_city('Riyadh', 'Saudia');
describe_city('Hyderabad', 'Sindh');
