function* getId() {
    let arrayId=[];
    const numeros=[1,2,3,4,5,6,7,8,9];
    const letrasm=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    const letrasM=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
        function numaleatorio(min,max){
            return Math.floor((Math.random() * (max-min)) +min);
        }
    while (arrayId.length<=9){
        let identificador=`${numeros[numaleatorio(0,numeros.length)]}${letrasM[numaleatorio(0,letrasM.length)]}${numeros[numaleatorio(0,numeros.length)]}${letrasM[numaleatorio(0,letrasM.length)]}${letrasM[numaleatorio(0,letrasM.length)]}${letrasM[numaleatorio(0,letrasM.length)]}${numeros[numaleatorio(0,numeros.length)]}`
        console.log(identificador)
        if(arrayId.some(function(element){return element==identificador;})!==true){
            arrayId.push(identificador);
        }else{
            arrayId.pop(identificador);
        }
    }
    for(let value of arrayId){
        yield value;
    }
}
const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);