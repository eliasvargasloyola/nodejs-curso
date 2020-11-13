//Llamar todo el archivo
// const multiplicar = require('./multiplicar/multiplicar');

//Lamar un elemento especifico del archivo
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const colors = require('colors/safe');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado ${colors.bgBlack.white(archivo)}`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('No reconocido');
        break;
}
