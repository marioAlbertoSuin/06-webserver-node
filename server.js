const express = require('express');
const app = express();
const hbs = require('hbs')
require('./hbs/helpers')
const puerto = process.env.PORT || 3000;

//handlebars motor de templates 
hbs.registerPartials(__dirname + '/views/parciales')

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send('Hello World');

    res.render('home', { nombre: "MariO sUIN", pagina: 'home' });
})

app.get('/about', (req, res) => {
    res.render('about', { nombre: "Mario", pagina: 'about' });
})



app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})