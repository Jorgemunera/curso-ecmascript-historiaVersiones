//podemos tener un objeto que dentro puede tener la representacion de llave valor, y esa llave valor puede ser rtambie otro objeto y cuando queremos acceder a ese objeto podemos tener errores, esta caracteristica bastante cvuando trabajamoscon frameworks y librerias
//esta caracteristica nos va ayudar bastante para pioder validar que la informacion este presente y que no rompa el aplicativo

const users={
    jorge:{
        country:'co'
    },
    ana:{
        country: 'pe'
    }
}

console.log(users?.bebeloper?.country);//debemos utilizar "?" sobre el elemento que queremos evaluar si existe, ya no me causa un error y no me rompe la aplicacion, pero si me regresa undefined