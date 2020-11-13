const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log("<============>".green);
    console.log(`TABLA DEL ${base}`.green);
    console.log("<============>".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        let archivo = `tablas/tabla-${base}.txt`;

        fs.writeFile(archivo, data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(archivo);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
