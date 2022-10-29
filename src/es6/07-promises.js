const anotherFunction=()=>{
    return new Promise((resolve, reject)=>{//funcion anonima que puede ser reprentada como arrow function
        if(true){
            resolve('Hey, esta sucediendo!');
        } else {
            reject('ups no funciono');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(err=>console.log(err));