let express = require('express');

let app = express();

app.listen(3000, ()  => console.log('Servidor corriendo'));

app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');
});

app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto')
});

app.get('/un-array', function(req, res){
    res.send([1,2,3,4,5,6])
});

app.get('/un-objeto', function(req, res){
    res.send({name: 'Dario'})
});

let producto = 
{tipoProducto: null,
precio: null,
cantidad: null,
}
app.get('/producto/agregar', function(req, res){
    res.send(producto)
});