//como se declara una clase
//declarando
class User{

};
//haciendo una instancia de una clase
//const newUser = new User();//de esta manera estamos generando una instancia de un objeto que en este caso seria lo que estamos haciendo con nuestra clase

//declarando
class user{
    //metodos
    greeting(){
        return 'hello'
    }
};
//creando una instancia
const jorge= new user();
console.log(jorge.greeting());
const pepo=new user();
console.log(pepo.greeting());

//constructor: es donde vamos a inicializar elementos de esta clase

class user{
    //constructor
    constructor(){
        console.log('nuevo usuario');
    }
    greeting(){
        return 'hello'
    }
}

const pepito=new user();

//this: hace referencia al elemento padre que lo contiene

class user{
    constructor(name){
        this.name=name;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana=new user('ana');
console.log(ana.greeting());


//setters and getters
class user{
    //constructor
    constructor(name,age){
        this.name=name;
        this.age= age;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age=n;
    }
}

const bebeloper1=new user('david', 15);//estamos generando nuestra instancia y asignando los valores david y 15, de eso se encarga el constructor y los asigna al dis de name y al this de age
console.log(bebeloper1.uAge);//estoy utilizando el get, me muestra el 15 que fue asignado gracias al contructor
console.log(bebeloper1.uAge=20);//pero tambien puedo hacer uso del set, donde estamos diciendo que a uAge le voy a cambiar el valor a 20