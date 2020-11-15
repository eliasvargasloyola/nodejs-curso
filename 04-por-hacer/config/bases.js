let bases = {
    crear: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    },
    actualizar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    },
    borrar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por borrar'
        }
    }
};

module.exports = {bases};
