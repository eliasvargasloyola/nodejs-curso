const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');


//Contenido estatico
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//Servicios
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Elias'
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en puerto 3000')
});
