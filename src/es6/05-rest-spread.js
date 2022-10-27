//existen dos tipos de expresiones de asignacion de destructuracion, las ue trabajhan con arrays y las que trabajan con objetos

//arrays destructure
let fruits=['apple','banana'];
let [a,b]=fruits;
console.log(a,b);//ahora
console.log(a,fruits[1]);//antes

//object destructuring
let user={username:'oscar', age:34};
let {username,age}=user;
console.log(username,user.age);//antes
console.log(username,age)//ahora

//spread operator
let person ={name:'oscar', age: 28};
let country='mx'

let data={id:1, ...person, country};//esa propagacion la hacemos gracias a ese operador, lo que se encuentre en person lo va asignar a ese nuevo objeto data
console.log(data);

//rest
function sum(num,...values){//estamos diciendo que vamos a pasar una serie de parametros que no sabemos cuales pero ahi estan
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1,1,2,3);