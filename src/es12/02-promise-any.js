const promise1=new Promise((resolve,reject)=> reject('Reject'));
const promise2=new Promise((resolve,reject)=> resolve('Resolve'));
const promise3=new Promise((resolve,reject)=> resolve('Resolve 2'));

Promise.any([promise1, promise2, promise3])// va a capturar la primera que sea de forma satisfactoria
.then(response=>console.log(response));