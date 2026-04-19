import { error } from 'node:console';
import { makeCoffee, sendCoffee } from './coffee.mjs';

// const order = 'Kopi Espresso';

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
//   if (makeCoffeeError) {
//     // Do something with error
//     console.error(makeCoffeeError);
//     return;
//   }

//   sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
//     if (sendCoffeeError) {
//       // Do something with error
//       console.error(sendCoffeeError);
//       return;
//     }

//     console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
//     console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
//   });
// });

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then((value) => {
    console.log("DEBUG: makeCoffee berhasil dengan nilai:", value);
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.error(error.message);
  });