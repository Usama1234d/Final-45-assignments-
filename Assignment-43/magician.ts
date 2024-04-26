// Assignment 43

let magicians : string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller'];

function copyArray(array2: string[]) {
    return [...array2]
}
function make_great(super_magicians: string[]) {
    for(let i=0; i < super_magicians.length; i++) {
 magicians[i] = ' The Great ' + super_magicians[i]
    }
}

function show_magician(top_magicians: string[]) {
    top_magicians.forEach(element => {
        console.log(element);
        
        
    });
}

const copyMagicianArray = copyArray(magicians)

make_great(copyMagicianArray);


console.log("\nThis is my original array");
show_magician(copyMagicianArray);

console.log("\nThis is my modified Array");
show_magician(magicians)