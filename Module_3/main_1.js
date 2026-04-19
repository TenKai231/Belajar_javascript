const array_pertama = [1, 2, 3, 4, 5];
console.log(typeof array_pertama);


// cara meyalain array mengunnakan arrya from 
const users = new Array ('Rahmat', 'Fulan', 'Indra');
const costumers = Array.from(users);
console.log(costumers);
console.log(costumers[0]);

const numers = new Array (5);

// array.from 

const foo = Array.from('foo');
console.log(foo);

// Manipulasi array
let MyArray = [1, 2, 3, 4, 5]
MyArray.push(6);
MyArray[1] = 10;
delete MyArray[0];
MyArray.splice(0,1); 
// MyArray.unshift(0);
// MyArray.pop();
// MyArray.shift(); 
console.log(MyArray);
MyArray.reverse();
console.log(MyArray);
MyArray.sort();
console.log(MyArray);


// Array Destucturing
const intoduction = ['Hello', 'Arsy']
const [greeting, name] = intoduction;

console.log(greeting)


