// function max(ArrayOFNumbers) {
//     return ArrayOFNumbers
//     .sort((a, b) => a - b)
//     .pop();
// }
function max(ArrayOFNumbers) {
    return [...ArrayOFNumbers]
    .sort((a, b) => a - b)
    .pop();
}

const numbers = [5, 10, 15, 20];
const lergest = max(numbers);

console.log(lergest); // Output: 20
console.log(numbers); // Output: [5, 10, 15, 20] (original array remains unchanged)




function registerEmail(person, email) {
    return {...person, email};
}

const person = {
    name : 'Jhone smith',
    userName : 'jsmith',
    age : 30
}

const personWithEmail = registerEmail(person, 'jhonsmith@gmail.com');

console.log(personWithEmail); // Output: { name: 'Jhone smith', userName: 'jsmith', age: 30, email: '
console.log(person); // Output: { name: 'Jhone smith', userName: 'jsmith', age: 30, email: '


// Aray Map

const oldArray = ['wayu', 'doa', 'dor', 'jems', 'lensa'];
const newArray = oldArray.map((name) => `${name}`);

console.log(oldArray); // Output: ['wayu', 'doa', 'dor', 'jems', 'lensa'] (original array remains unchanged)
console.log(newArray); // Output: ['wayu', 'doa', 'dor', 'jems', 'lensa']

const truthyArray = [1, '', 'halo', null, undefined, 'world'] 
    .filter(item => Boolean(item));
console.log(truthyArray); // Output: ['halo', 'world']


// contoh array fllter unutk menyating siswa
const stundents = [
    {
        name : 'Jhone',
        score : 80
    },
    {
        name : 'Doe',
        score : 60
    },
    {
        name : 'Smith',
        score : 90
    },
    {
        name : 'Jane',
        score : 50
    }
];

const eligitleStudents = stundents.filter((stundents) => stundents.score >= 70);
const totalScore = stundents.reduce((acc, stundents) => acc + stundents.score, 0);
console.log(eligitleStudents); // Output: [{ name: 'Smith', score: 90 }]
console.log(totalScore); // Output: 280

// object frezee

const user = {
    name : 'harun',
    email : 'harun@gmail.com'
};

Object.freeze(user);

user.email = 'deoharun@gmai.com';
console.log(user); // Output: { name: 'harun', email: '

// conoth lain objekct frezee 

function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
        const prop = object[name];
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(object);
}

const complexUser = {
    name : 'Bob',
    email : 'bob@dicoding.com',
    preferences : {
        theme : 'dark',
        language : 'en',
        newsletter : true,
        addres : {
            city : 'Jakarta',
            country : 'Indonesia'
        }
    }
};

deepFreeze(complexUser);

// Diabiakan 
complexUser.preferences.addres.city = 'Bandung';

console.log(complexUser.preferences.addres.city); // Output: 'Jakarta' (perubahan diabaikan)