// import Myfunction, { isPrime } from './function.mjs';
// import MyFunc from './fust.mjs';
// import { Goodmring, anotherVariable } from './fust.mjs';

// console.log(Goodmring);
// console.log(anotherVariable);
// Myfunction();
// MyFunc();
// console.log(isPrime(17));

/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */

import unique from './utils.mjs';
import { splitString } from './utils.mjs';

unique([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]
splitString("Hello"); // Output: ['H', 'e', 'l', 'l', 'o']

console.log(unique([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(splitString("Hello")); // Output: ['H', 'e', 'l', 'l', 'o']