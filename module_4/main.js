const obj1 = {name: 'Rama'}
const obj2 = {last_name: 'Wahyu', Adderes : 'Jl. Batik kuning nomor 10'};
const newoObjt = {...obj1, ...obj2};
console.log(newoObjt);

// pengunaan oprator spread untuk menggabungkan array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2];
console.log(newArray);
const copy = [...array1];
console.log(copy);

// pengunaan oprator spread untuk menggabungkan string
const string1 = 'Hello';
const string2 = 'World';
const newString = [...string1, ...string2].join('');
console.log(newString);

