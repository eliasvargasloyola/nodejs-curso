require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json({
        "Hola": "Mundo"
    });
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            description: 'Falta el nombre'
        });
    }

    res.json(body);
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json({
        "Hola": "Mundo"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`);
});
