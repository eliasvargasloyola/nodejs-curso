const bases = require('../bases/bases');

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', bases.listar)
    .command('crear', 'Crear archivo nuevo', bases.crear).help().argv;

module.exports = {
    argv
};
