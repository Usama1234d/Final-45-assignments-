// Assignment 30
var adminUser = ["Usmama", "Admin", "Muzammil", "Basit", "Konain"];
for (var _i = 0, adminUser_1 = adminUser; _i < adminUser_1.length; _i++) {
    var user = adminUser_1[_i];
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(user, " thank you for logging it again"));
    }
}
