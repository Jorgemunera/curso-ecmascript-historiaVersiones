//ahora ademas de convertir un objeto en un array de arrays, tambien se va a poder hacer un cambio inverso pasar de un array de arrays a un objeto en javascript

const entries=new Map([["name","oscar"],["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));
