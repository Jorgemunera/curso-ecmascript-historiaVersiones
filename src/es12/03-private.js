//setters and getters
class user{
    //constructor
    constructor(name,age){
        this.name=name;
        this.age= age;
    }
    //metodos
    #speak(){//ahora lo que vamos hacer es colocar # para indicar que este metodo se vuelve privado dentro de una clase
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