/*let getNombre = async () => {
    return 'Elias';
};*/

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('Elias');
        }, 3000);
    });
};

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${nombre}`

};

saludo().then((mensaje) => {
    console.log(mensaje);
}).catch((err) => {
    console.log('Error', err)
});
