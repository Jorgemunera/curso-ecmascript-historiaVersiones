//vamos a hacer una promesa, y en una promesa tenemos diferentew resultados segun sea el caso, y una promesa hace uno a su nombre porque es algo que va a pasar, hoy, maana o nunca
//asyn y await nos va a ayudar a controlar el flujo de esta informacion

//vamos a hacer nuestra funcion que sera nuestra promesa, que dentroi nos retornara una nueva promesa con resolve y reject segun sea el caso
const fnAsync=()=>{
    return new Promise((resolve, reject)=>{//dentro de nuestra promesa tenemos una funcion anonima
        (true)//ya no usamos un if, sino un if ternario, donde solo utilizamos el valor, true o false
            ? setTimeout(() => resolve('Async!!'),2000)
            :reject(new Error('Error!'));
    })
}

const anotherFn=async ()=>{//antes de los argumentos es que usamos la palabra reservada async, una vez hecho esto podremos utilizar la palabra reservada await
    const something=await fnAsync();
    console.log(something);
    console.log('hello');
}

console.log('before');
anotherFn();
console.log('after');