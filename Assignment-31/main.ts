// Assignment 31

let userName = ["admin", "usama","basit","muzammil","musaib"];

// empty array 

userName = [];

if (userName.length > 0 ) {

    for (let i = 0; i < userName.length; i++){
        if (userName[i] == "admin") {
        console.log(`\n Hellow ${userName[i]} would you like to see the report?\n`);

        } else {
            console.log(`Hello ${userName} thank you for logging again`);
            
        }

    }
} else {
    console.log(`we need to find some user`); // output 
    
}
