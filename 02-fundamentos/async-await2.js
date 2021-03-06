let empleados = [
    {id: 1, nombre: 'Elias'}, {id: 2, nombre: 'Alonso'}, {id: 3, nombre: 'Victoria'}
];

let salarios = [
    {id: 1, salario: 5000}, {id: 2, salario: 2500}
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });

};

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe un salario para el empleado con id ${empleado.id}`);
        } else {
            resolve(salarioDB);
        }

    });

};

let getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${empleado.nombre} tiene un salario de ${resp.salario}`;

};

getInformacion(1).then((mensaje) => {
    console.log(mensaje);
}).catch(err => console.log('Error', err));
