const user = {
    name : 'Rahmat',
    last_name : 'Fulan',
    id : 12345,
    age : 20,
    city : 'Semarang',
    email : "wahy@gmail.com",
    username : "wahy",
    password : "123456"
};
const product = {nama : 'Sepetu Nike ' , harga : 500000};

console.log(product.nama);
console.log(user.last_name);



const {name, last_name, isMale = false} = user;
console.log(isMale);

delete user.password;
delete user['age'];
const id = user.id;
const email = user.email
// const {id, email} = user;

// console.log(id, email);
console.log(user);


const account = {
    balance : 1000000,
    debt : 2000
};

account.balance = 2000
console.log(account.balance);
