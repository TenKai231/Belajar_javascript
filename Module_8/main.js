const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const naw = [];

for (let i = 0; i < names.length; i++) {
    naw.push(`${names[i]}!`);
}

console.log(naw);


const newNames = names.map(name => `${name}!`);

console.log(newNames);


// not pure function 
let value = 0;

// function addWith(addingValues) {
//     value += addingValues;
//     console.log(`Current value: ${value}`);
//     return value;
// }

// const result1 = addWith(1);
// const result2 = addWith(1);
// const result3 = addWith(1);

// console.log(result1,result2,result3);



// pure function

function addwithPure(addingValues) {
    return value + addingValues;
}

const result4 = addwithPure(0, 1);
console.log(`Result is ${result4}`);
const result5 = addwithPure(1, 1);
console.log(`Result is ${result5}`);
const result6 = addwithPure(2, 1);
console.log(`Result is ${result6}`);
