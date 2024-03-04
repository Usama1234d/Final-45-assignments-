// Storing a person name in Variable 

let personName: string = "Usama Arshad";

// printing a person name in uppercase

console.log("Uppercase", personName.toUpperCase());

// printing a person name in  lowercase 

console.log("Lowercase", personName.toLowerCase());

// printing a person in titlecase  // not working 

let userName: string = "KARACHI IS A FAMOUS CITY"
personName.split("");
let titlecaseName: string = "" 
for (let i =0; i < userName.length; i++) {
    titlecaseName +=userName
    [i].charAt(0).toUpperCase()
    +userName[i].slice(1).toLocaleLowerCase()+""

}

console.log(titlecaseName)



