function* getId() {
    let arrayId=[];
    for(let i=1;i<11;i++){
        let num=i;
        arrayId.push(num);
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