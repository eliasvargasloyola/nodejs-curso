let nombre =  'Deadpool';
let real = 'Wade Wilson';

console.log(nombre + ' ' +  real);

//Esto es template string
console.log(`${nombre} es ${real}`)

function identidad() {
    return `${nombre} es ${real}`;
}

console.log(`El nombre de : ${ identidad() }`);
