const colors = require('colors/safe');

const {argv} = require('./config/yargs.js');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.listado();

        for (let tarea of listado) {
            console.log('\n');
            console.log(colors.green('========= Por Hacer ========='));
            console.log(tarea.descripcion);
            console.log(`Estado : ${tarea.completado}`);
            console.log(colors.green('========================='));
        }
        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
        break;

}
