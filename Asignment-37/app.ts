// Assignment 37 

function make_shirt (size: string = 'large', text: string = 'I love typescript'): void {
    console.log(`You order a ${size} shirt, that says ${text}`);
    
}

make_shirt()
make_shirt('medium');
make_shirt('small', 'i need a big shirt to wear.')