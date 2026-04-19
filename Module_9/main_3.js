import { doSomething } from './utils.mjs';

function onFullfilled(doSomethingData) {
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    console.error(doSomethingError); 
}

doSomething().then(onFullfilled, onRejected);