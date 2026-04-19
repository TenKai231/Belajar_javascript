const foods = ['nasi goreng', 'sate ayam', 'bakso', 'mie ayam', 'rendang'];

// console.log(foods[0]); // Output: nasi goreng
// console.log(foods[1]); // Output: nasi goreng
// console.log(foods[2]); // Output: nasi goreng
// console.log(foods[3]); // Output: nasi goreng

// Looping
for (let i = 0; i < foods.length ; i++) {
    console.log(foods[i]);
}


const person = {
    name: 'Rama',
    age: 22,
    job: 'Programmer',
    city: 'Jakarta',
};
for (const property in person) {
    console.log(property, person[property]);
};

const names = ['Rama', 'Wahyu', 'Aras'];
for ( const name of names) {
    console.log(name);
}

let i = 0;
while (i < 5){
    console.log(`Angka ke ${i} adalah ${i}`);
    i++;
}

do {
    console.log(`Angka ke ${i} adalah ${i}`);
    i++;
}while (i < 5);