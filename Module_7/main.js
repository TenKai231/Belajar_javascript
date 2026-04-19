class perosn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

const person1 = new perosn('John', 30);
const person2 = new perosn('dis', 24);

console.log(person1.name); // Output: John
console.log(person2.age);  // Output: 24

person1.eat();
person2.eat();

console.log(typeof perosn); // Output: true

