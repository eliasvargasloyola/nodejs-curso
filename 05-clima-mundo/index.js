const {info} = require('./info/info');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: '',
        demand: true
    }
}).argv;

info(argv.direccion).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
