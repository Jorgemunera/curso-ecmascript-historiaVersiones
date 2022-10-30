//admite el uso de rest y spread con objetos

const user={username: 'gndx', age:34, country: 'co'};
const {username, ...values}=user;

console.log(username);
console.log(values);
console.log(user);