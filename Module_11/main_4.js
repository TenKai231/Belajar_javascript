// function calculateTotal(shoopingCart) {
//     let total = 0;
    

//     for (let i = 0; i < shoopingCart.length; i += 1) {
//         total += shoopingCart[i].price;
//     }
    
//     return total;
// }

// const shoopingCart = [
//     { name: 'Book', price: 10000 },
//     { name: 'Pen', price: 2000 },
//     { name: 'Notebook', price: 5000 },
// ];

// console.log(`Total Belanja : Rp ${calculateTotal(shoopingCart)}`);

// Fungsi untuk menghitung total harga belanjaan

// eror code
// function calculateTotal(shoppingCart) {
//   let total = 0;

//   // Penghitungan tagihan terjadi di sini…
//   for (let i = 0; i <= shoppingCart.length; i += 1) {
//     total += shoppingCart[i].price;
//   }

//   return total;
// }


// fix code  buat this make broken if we add null and string in price
// function calculateTotal(shoppingCart) {
//   const total = 0;
 
//   return shoppingCart.reduce(
//     (accumulator, cartItem) => accumulator + cartItem.price,
//     total,
//   );
// }

// fix code final 

function calculateTotal(shoppingCart) {
  const total = 0;
 
  return shoppingCart.reduce((accumulator, cartItem) => {
    if (typeof cartItem.price === 'number') {
      return accumulator + cartItem.price;
    } else {
      console.error(`Tipe data cartItem.price tidak valid:`, cartItem);
      return accumulator;
    }
  }, total);
}


// Contoh data belanjaan
const shoppingCart = [
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 130 },
  { name: 'Watermelon', price: '160' },
  { name: 'Pineapple', price: null },
  { name: 'Grape', price: null },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);