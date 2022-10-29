//Generator: son un tipo especial de funcion quenos va a retornar una serie de valores segun el algoritmo definido

//el *es la clave para determinar un generator
function* iterate(array){
    for (let value of array){//el valor de cada uno de los elementos del array
        yield value;//retornarlo cada vez que lo necesitemos o segun sea el caso
    }
}

const it=iterate(['oscar', 'david', 'ana','pedro','jorge']);
console.log(it.next().value);//una palabra reservada en este caso un metodo llamado next que se crea dentro del generator, el generator recuerda su estado, por tal razon a pesar de que utilizamos el mismo codigo no siempre muestra oscar sino que va mostrando cada uno de los elementos del array
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
