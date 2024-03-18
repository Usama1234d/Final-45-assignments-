// Assignment 26
type alienColor = "Green" | "Red" | "Yellow"

let alienColor = "Green";

if (alienColor == "Green") {  
    console.log("You have just earned 5 points for shooting the alien!") // Alien is green earned jsut 5 points 
} else {
    console.log("no output")
}

let allienColorFailed = "Red";

if (allienColorFailed == "Green") {
    console.log("You have just earned 5 points ")
} else {
    console.log("You have just earned 10 points!")  // Alien color isn't Green earned 10 points 
}