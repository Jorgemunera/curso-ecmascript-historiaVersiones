
//de esta manera es que se hacia antes para asignar un valor por defecto a variables dentro de funciones
function newUser(name,age,country){
    var name=name || 'oscar';
    var age=age || 34
    var country =country ||'mx'

    console.log(name, age, country);
}
newUser(); //se puede llamar y asignara valores por defecto a las variables

newUser('david',15,'co');


//Asi se hace ahora con la actualizacion de js es6
//y el cambio es que se puede asignar el valor por defecto de nuestras variables en los parametros que colocamos en la funcion

function newAdmin(name='oscar',age=1, country='cl'){
    console.log(name,age,country);
}
newAdmin();
newAdmin('pepo',2,'hn');