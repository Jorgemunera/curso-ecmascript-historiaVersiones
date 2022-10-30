try{
    hello();
} catch (error){//aqui no entra en el catch y no se ejecuta nada porque no esta definida la funcion hello
    console.log(error);
}

try{
    anotherFn();
} catch{//y ahora es opcional el uso del error que me va a regresar, y en este caso, entra en el catch porque no puede encontrar la funcion anotherFn
    console.log('esto es error')
}