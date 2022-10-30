//primeramente vamos a entender las diferentes formas que tenemos de acceder al objeto globalThis, en este caso todo lo que este almacenado ahi con esto vamos a poder acceder a diferentes elementos, en el navegador tenemos window, en node tenemos global, en webworkers tenemos self. y habia incompatibilidad cuando queriamos trabajar de alguna manera con una aplicacion que pudiera vivir en estos tres conceptos, en mi navegador en tu pc o en webworkres, asi que nace el concepto de globalthis

//console.log(window);    aqui muestra error
//console.log(global);    aqui muestra error
//console.log(self);    aqui muestra error
console.log(globalThis); //soluciona el problema