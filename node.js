const express = require('express');
const app = express();
const fs = require ('fs');

class Contenedor{
  constructor(nombreArchivo){
    this.nombreArchivo = nombreArchivo;
    }
    async getProductos (){
      try{
        //Se lee el archivo
        const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
        //Se convierte el contenido del archivo a un array
        productos = JSON.parse(contenido);
      }catch(error){
        console.log('No se pudieron obtener los productos');
        throw error;
      }
    }
}

const contenedor = new Contenedor("productos.txt");


productos = contenedor.getProductos("productos.txt")
.then(()=>console.log("Productos agregados"))
.catch(()=>console.log("No se encontraron productos"));

app.get('/productos', function (req, res) {
  res.send([productos]);
});

app.get('/productoRandom', function (req, res) {
  res.send(productos[Math.floor(Math.random() * productos.length)]);
});

app.listen(8080, function () {
  console.log('Comencé a escuchar');
});