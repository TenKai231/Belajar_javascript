export function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        console.log(`Melakukan sesuatu sebelum Promise diSelesikan`)
        const number = Math.random();

        if (number > 0.5) {
            resolve('Promise berhasil diselesaikan!');
        }else {
            reject(new Error('Promise gagal diselesaikan!'));
        }
    }, 2000);   
}

export function doSomething() {
    return new Promise(promiseExecutor);
}

