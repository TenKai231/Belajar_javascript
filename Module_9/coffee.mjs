export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 3000;

    console.log(`Mengirim kopi dalam ${estimationTime / 1000} detik...`);

    setTimeout(() => {
      const number = Math.random();

      if (number > 0.3) {
        console.log('Kopi sampai!');
        resolve(name);
      } else {
        reject(new Error('Gagal mengirim kopi'));
      }
    }, estimationTime);
  });
}

export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 5000;
    const inSecond = Math.ceil(estimationTime / 1000);

    console.log(`Menunggu ${inSecond} detik...`);

    setTimeout(() => {
      const number = Math.random();

      if (number > 0.3) {
        console.log('Kopi siap!');
        resolve(name);
      } else {
        reject(new Error('Gagal membuat kopi'));
      }
    }, estimationTime);
  });
}