const axios = require('axios');

const lugar = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=6c6259e8731ee18c582e2449ecdd7452`,
        headers: {'x-key': '123'}
    });

    const response = await instance.get();

    if (response === undefined || response.data.name === undefined) {
        throw  new Error(`No hay resultado para ${dir}`);
    }

    const data = response.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    lugar
};
