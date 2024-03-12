// Assignment 14 
// Inviting friends for a dinner

let freindsCircle: string [] = ["Farooq Awan", "Mudassir", "Ammar Khan", "Ali Hasan"];

console.log(`Hey! ${freindsCircle[0]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${freindsCircle[1]} I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${freindsCircle[2]} I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${freindsCircle[3]} I 'd love to invite you over for dinner at my place`);



// Assignment 15 
// Updating Frind list 

let updatedFriendsList : string [] = ["Farooq Awan", "Mudassir", "Ammar Khan", "Ali Hasan"];

console.log(`Hey! ${updatedFriendsList[0]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList[1]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList[2]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList[3]}  I'd love to invite you over for dinner at my place`);
console.log(`${updatedFriendsList[3]} will not come to attend my dinner`);

updatedFriendsList.splice(3,3, "Musaib"); // splicing 

console.log(`Hey! ${updatedFriendsList[0]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList[1]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList[2]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList[3]}  I'd love to invite you over for dinner at my place`);


// Assignment 16 

let updatedFriendsList2: string [] = ["Farooq Awan", "Mudassir", "Ammar Khan"];
console.log(`Hey! ${updatedFriendsList2[0]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[1]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[2]}  I'd love to invite you over for dinner at my place`);


console.log("Hey there! I'm planning a dinner party at a special location ", "I'll be inviting some other friends as well")
updatedFriendsList2.unshift("Ubaid Ali");               // slicing 03
updatedFriendsList2.splice(4,0, "Muzammil");            // slicing 04 
updatedFriendsList2.push("Adnan Jut");                  // slicing 05

console.log(`Hey! ${updatedFriendsList2[0]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[1]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[2]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[3]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[4]}  I'd love to invite you over for dinner at my place`);
console.log(`Hey! ${updatedFriendsList2[5]}  I'd love to invite you over for dinner at my place`);


// Assignment 17

console.log("Sorry! for this time, due to space issue, i have invited only 02 friends");

console.log(`Hey! ${updatedFriendsList2.pop()} i am unable to invite you`);
console.log(`Hey! ${updatedFriendsList2.pop()} i am unable to invite you`);
console.log(`Hey! ${updatedFriendsList2.pop()} i am unable to invite you`);
console.log(`Hey! ${updatedFriendsList2.pop()} i am unnable to invite you`);

// Inviting only 02 Friends 
console.log(`Dear ${updatedFriendsList2[0]} you are still invited for dinner`);
console.log(`Dear ${updatedFriendsList2[1]} you are still invited for dinner`);
updatedFriendsList2.pop();
updatedFriendsList2.pop();
console.log(updatedFriendsList2);






