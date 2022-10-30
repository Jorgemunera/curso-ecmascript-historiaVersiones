//este concepto tiene que ver con regex, que no es mas que una forma en la que nosotros podemos generar diferentes filtros o reglas que nos van a permetir filtrar segun sea el caso, con regex podemos validar que una contraseña cumpla un objetivo, tantos caracteres, mayuscula, minuscula etc, o validar que en un imput si tengamos un correo electronico valido, que normalmente es n caracteres @ n caracteres un . y una extencion de dominio, y esto lo podemos hacer con regex una expresion regular

const regex= /\b(Apple)+\b/g; //en este caso lo que quiero hacer es buscar la palabra apple dentro de un string


const fruit="Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for(const match of fruit.matchAll(regex)){
    console.log(match)
}