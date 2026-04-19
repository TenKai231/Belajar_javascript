const mySet = new Set([1,2,3,4,5]);

console.log(mySet);

const fruit = new Set();
fruit.add(1);
fruit.add('Apple');
fruit.add(2);
fruit.add('Pisang');

console.log(fruit);



for (const numbers of fruit) {
    console.log(numbers);
}
fruit.forEach((value) => console.log(value));

fruit.delete(1);
fruit.delete('Apple');
console.log(fruit);