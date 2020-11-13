let empleados = [
    {id: 1, nombre: 'Elias'}, {id: 2, nombre: 'Alonso'}, {id: 3, nombre: 'Victoria'}
];

let salarios = [
    {id: 1, salario: 5000}, {id: 2, salario: 2500}
];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }

};

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No existe un salario para el empleado con id ${empleado.id}`);
    } else {
        callback(null, salarioDB);
    }

};

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, function (err, salario) {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario del empleado ${JSON.stringify(empleado)} es de ${JSON.stringify(salario)} USD`);
    })

});
