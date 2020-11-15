const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo guardar archivo');
    });
};

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const listado = () => {
    cargarDb();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDb();
    listadoPorHacer = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);
    guardarDB();
};

module.exports = {
    crear,
    listado,
    actualizar,
    borrar
};
