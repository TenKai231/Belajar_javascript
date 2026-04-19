const age = 20;
const name = "John Doe";
console.log(`My name is ${name} and I am ${age} years old.`);

const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);

let nama = "Jane Doe";
console.log(`My name is ${nama}.`);
nama = "Joe Doe";
console.log(`My name is now ${nama}.`);

const currentDate = new Date().getFullYear();
const text =  'sekarang tahun ' + currentDate;
console.log(text);

const name1 = {first : "John", last: null};
const name2 = {first : "Jane", last: undefined};

console.log(JSON.stringify(name1)); // Output: null    
console.log(JSON.stringify(name2)); // Output: undefined

const strNumber = '123';
const strFloat = '3.14';
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true

let Umur = 18;

typeof age;

5+4;
10/2;
Umur = 30;

(age > 18) ? console.log("Dewasa") : console.log("Belum Dewasa");