const {bases} = require('./bases');

const argv = require('yargs')
    .command('crear', 'Crear un elemento', bases.crear)
    .command('listar', 'Listar elementos', {})
    .command('actualizar', 'Actualizar un elemento', bases.actualizar)
    .command('borrar', 'Borrar un elemento', bases.borrar)
    .help().argv;

module.exports = {
    argv
};
