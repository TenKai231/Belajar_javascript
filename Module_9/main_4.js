import { doSomething} from './utils.mjs';

// tanpa menggunakan Async/Await

// console.log('start');

// doSomething()
//     .then((value) => {
//         console.log('success:', value);
//     })

// console.log('end');

async function promiseWitheAnsyAwite() {
    try{
        console.log('start');

        const result = await doSomething();
        console.log(result);

        console.log('end');
    } catch (error) {
        console.log(error.massage);
    }
}

promiseWitheAnsyAwite();

