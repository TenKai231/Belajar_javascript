// fix one
// export function add(numA, numB) {
//     return numA + numB;
// }

// fix tow 
// export function add(numA, numB) {
//   if (typeof numA !== 'number' || typeof numB !== 'number') {
//     throw new Error('Expected a number');
//   }

//   return numA + numB;
// }

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Harus number');
  }
  return a + b;
}

module.exports = { add };