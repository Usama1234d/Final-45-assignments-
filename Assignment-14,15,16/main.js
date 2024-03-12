// Assignment 14 
// Inviting friends for a dinner
var freindsCircle = ["Farooq Awan", "Mudassir", "Ammar Khan", "Ali Hasan"];
console.log("Hey! ".concat(freindsCircle[0], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(freindsCircle[1], " I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(freindsCircle[2], " I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(freindsCircle[3], " I 'd love to invite you over for dinner at my place"));
// Assignment 15 
// Updating Frind list 
var updatedFriendsList = ["Farooq Awan", "Mudassir", "Ammar Khan", "Ali Hasan"];
console.log("Hey! ".concat(updatedFriendsList[0], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList[1], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList[2], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList[3], "  I'd love to invite you over for dinner at my place"));
console.log("".concat(updatedFriendsList[3], " will not come to attend my dinner"));
updatedFriendsList.splice(3, 3, "Musaib"); // splicing 
console.log("Hey! ".concat(updatedFriendsList[0], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList[1], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList[2], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList[3], "  I'd love to invite you over for dinner at my place"));
// Assignment 16 
var updatedFriendsList2 = ["Farooq Awan", "Mudassir", "Ammar Khan"];
console.log("Hey! ".concat(updatedFriendsList2[0], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[1], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[2], "  I'd love to invite you over for dinner at my place"));
console.log("Hey there! I'm planning a dinner party at a special location ", "I'll be inviting some other friends as well");
updatedFriendsList2.unshift("Ubaid Ali"); // slicing 03
updatedFriendsList2.splice(4, 0, "Muzammil"); // slicing 04 
updatedFriendsList2.push("Adnan Jut"); // slicing 05
console.log("Hey! ".concat(updatedFriendsList2[0], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[1], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[2], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[3], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[4], "  I'd love to invite you over for dinner at my place"));
console.log("Hey! ".concat(updatedFriendsList2[5], "  I'd love to invite you over for dinner at my place"));
// Assignment 17
console.log("Sorry! for this time, due to space issue, i have invited only 02 friends");
console.log("Hey! ".concat(updatedFriendsList2.pop(), " i am unable to invite you"));
console.log("Hey! ".concat(updatedFriendsList2.pop(), " i am unable to invite you"));
console.log("Hey! ".concat(updatedFriendsList2.pop(), " i am unable to invite you"));
console.log("Hey! ".concat(updatedFriendsList2.pop(), " i am unnable to invite you"));
// Inviting only 02 Friends 
console.log("Dear ".concat(updatedFriendsList2[0], " you are still invited for dinner"));
console.log("Dear ".concat(updatedFriendsList2[1], " you are still invited for dinner"));
updatedFriendsList2.pop();
updatedFriendsList2.pop();
console.log(updatedFriendsList2);
