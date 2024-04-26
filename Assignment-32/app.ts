// Assignmetn 32

let current_users : string [] = ["admin", "Ali", "basit", "Mubashir", "Maha"]
let new_users : string [] = ["admin", "Shamoon", "Moiz", "Ibrahim", "basit"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLocaleLowerCase())) {
        console.log(`Sorry ${new_user} this name is already taken, enter a new username`);
        
        
    } else {
        console.log(`Yes Mr.${new_user}, this username is available`);
        
    }
}