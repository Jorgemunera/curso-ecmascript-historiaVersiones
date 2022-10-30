
const array=['one','two','three','four','five','six'];//como accederias al ultimo elemento de este array sin saber cuantos tiene?

//como se hacia antes

console.log(array[array.length-1]);//me devuelve el ultimo elemento de la posicion de este array sin saber cuantos tiene


//como se hace ahora

console.log(array.at(-1));