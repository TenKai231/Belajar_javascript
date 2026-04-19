function generateArray(n) {
    const result = [];
    for (let counter = 1; counter <= n; counter+= 1) {
        result.push(counter);
    }
    return result;
}

console.log(generateArray(5)); // Output: [1, 2, 3, 4, 5]

function generateArrayWithMap(n) {
    if (n < 0) {
        return [];
    }

    return[...generateArray(n - 1), n];
}

console.log(generateArrayWithMap(5)); // Output: [1, 2, 3, 4, 5]