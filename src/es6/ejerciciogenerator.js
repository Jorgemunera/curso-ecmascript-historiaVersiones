function* getId(array) {
    for(let value of array){
        yield value;
    }
}
const ListaMichis=[];//creo array de objetos, que en este caso tendrá a los michis que se creen
class Michi{constructor(id){//se crea una clase con su constructor y la propiedad id
    this.id = id;
}}
let arrayId=[];
function numaleatorio(min,max){//creo funcion aleatoria que me retorna un numero entre un min y un max
    return Math.floor((Math.random() * (max-min)) +min);
}
while (arrayId.length<=9){
    let numero=numaleatorio(1,11)
    if(arrayId.some(function(element){return element==numero;})!==true){//esta validacion se hace sobre el arrayId que no podra tener id iguales se logra con la validacion respectiva y se pushea en los arrays
        arrayId.push(numero);
        let michi=new Michi(numero);
        ListaMichis.push(michi)
    } 
}

const id = getId(ListaMichis);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
