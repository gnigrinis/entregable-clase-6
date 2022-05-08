const express = require('express');
const app = express();
const fs = require ('fs');

async function getProductos (fileName){
  try{
    //Se lee el archivo
    const contenido = await fs.promises.readFile(fileName, 'utf-8');
    //Se convierte el contenido del archivo a un array
    return productos = JSON.parse(contenido);
  }catch(error){
    console.log('No se pudieron obtener los productos');
    throw error;
  }
}

getProductos("productos.txt")
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