//que pasa cuando tenemos un numero y queremos trabajhar con estos valores numericos y regresar un valor por defecto en dado caso cuando este pueda llegar a ser nullo o cuando no tengamos el valor y me pueda regresar un valor en dado caso

const anotherNumber=null;
const validate=anotherNumber ?? 5; //este operador nos permite comprobar si ese valor llega null
console.log(validate);
