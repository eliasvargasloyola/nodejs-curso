const axios = require('axios');

const clima = async (lat, lon) => {

    const encodeLat = encodeURI(lat);
    const encodeLon = encodeURI(lon);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${encodeLat}&lon=${encodeLon}&appid=6c6259e8731ee18c582e2449ecdd7452&units=metric`
    });

    const response = await instance.get();

    if (response === undefined || response.data.main === undefined) {
        throw  new Error(`No hay temperatura para ${lat} ${lon}`);
    }

    const data = response.data;
    const temp = data.main.temp;
    const min = data.main.temp_min;
    const max = data.main.temp_max;

    return {
        temp,
        min,
        max
    }
};

module.exports = {
    clima
};
