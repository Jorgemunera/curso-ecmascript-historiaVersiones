//enhance object literals

//asi se hace ahora
function newUser(user,age,country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("jorge",34,"co",1));



//asi se hacia antes