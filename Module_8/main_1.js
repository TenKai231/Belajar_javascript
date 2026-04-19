function applay(operation, ...args) {
    return operation(...args);
}

function sum(a, b, c ) {
    return a + b + c;
}

function dicount(price, discount) {
    return price - (price * discount);
}

const productPrice = applay(sum, 100, 50, 25);
const discountPrice = applay(dicount, productPrice, 0.1);

console.log(`produced price : `,productPrice);
console.log(`with dicount price : `,discountPrice);


function memorize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
    }
}

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

const memorizedSumArray = memorize(sumArray);
const lergeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time(`Memorized sum array`);
console.log(`Total : `, memorizedSumArray(lergeArray));
console.timeEnd(`Memorized sum array`);

console.time(`Memorized Sum second call (Chance)`);
console.log(`Total : `, memorizedSumArray(lergeArray));
console.timeEnd(`Memorized Sum second call (Chance)`);



function adjectivy(adjective) {
    return function(noun) {
        return `${adjective} ${noun}`;
    }
}

function multiPleBy(x) {
    return function(y) {
        return x * y;
    }
}

const coolifier = adjectivy('keren');
const funnifier = adjectivy('Lucu');

const multipleByFive = multiPleBy(5);

console.log(coolifier('programmer')); // Output: "keren programmer"
console.log(funnifier('game')); // Output: "Lucu game"
console.log(multipleByFive(10)); // Output: 50
console.log(multipleByFive(20)); // Output: 100


function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return (x) => {
        return f(g(x));
    }
}

const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(5)); // Output: 36

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]