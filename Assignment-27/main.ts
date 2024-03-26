// Assignment 27


type  alien_color_1 = "Green" | "Yellow" | "Red"

// Version 01
let alien_color_1 = "Green" ;  // Define Color 
if (alien_color_1 == "Green") {
    console.log("Alien color is Green, Player earned 05 points"); // Output Alien Color is green
    
} else if (alien_color_1 == "Yellow") {
    console.log("Alien color is Yellow, Player earned 10 points");
    
} else if (alien_color_1 == "Red") {
    console.log("Alien color is Red, Player earned 10 points");
    
}

// Version 02

let alien_color_2 = "Yellow";

if (alien_color_2 == "Green") {
    console.log("Alien color is Green, Player earned 05 points");

} else if (alien_color_2 == "Yellow") {
    console.log("Alien color is Yellow, Player earned 10 points"); // Output Alien Color is Yellow
    
} else if (alien_color_2 == "Red") {
    console.log("Alien color is Red, Player earned 15 points");
    
}

// Version 03 

let alien_color_3 = "Red";

if (alien_color_3 == "Green") {
    console.log("Alien color is Green, Player earned 05 points");
    
} else if (alien_color_3 == "Yellow") {
    console.log("Alien color is Yellow, Player earned 10 points");
}
else if (alien_color_3 == "Red") {
    console.log("Alien color is Red, Player earned 15 points"); // Output Alien Color is Red
    
}