//primero vamos a trabajar con el llamado a una API en este caso una fakeAPI, tambien vamos hacer en nuestro archivo la logica que implementara este recurso, estamos trabajando con modulos ya que los vamos a separar

//vamos a instalar una dependencia que vamos a utilizar, es para poder utilizar fetch dentro de node para hacer una peticion, para esto en la terminal npm install node-fetch

import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();//contante para que lo que recibimos sea response, lo transformemos en un objeto json el cual vamos a utilizar pra presentaer la estructura que necesitamos

export{products}; //ya no es necesario utilizar la palabra reservada async