const {lugar} = require('../lugar/lugar');
const {clima} = require('../clima/clima');


const info = async (dir) => {

    const city = await lugar(dir);

    const temp = await clima(city.lat, city.lng);

    return `El clima en ${city.direccion} es de ${temp.temp}`;

};

module.exports = {
    info
};
