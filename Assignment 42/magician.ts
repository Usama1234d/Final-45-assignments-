// Assignment 42

let magicians : string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller'];

function make_great(super_magicians: string[]) {
    for(let i=0; i < super_magicians.length; i++) {
 magicians[i] = ' The Great ' + super_magicians[i]
    }
}

function show_magician(top_magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
        
        
    });
}
make_great(magicians);
show_magician(magicians);