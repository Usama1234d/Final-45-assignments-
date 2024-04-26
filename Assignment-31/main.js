// Assignment 31
var userName = ["admin", "usama", "basit", "muzammil", "musaib"];
// empty array 
userName = [];
if (userName.length > 0) {
    for (var i = 0; i < userName.length; i++) {
        if (userName[i] == "admin") {
            console.log("\n Hellow ".concat(userName[i], " would you like to see the report?\n"));
        }
        else {
            console.log("Hello ".concat(userName, " thank you for logging again"));
        }
    }
}
else {
    console.log("we need to find some user");
}
