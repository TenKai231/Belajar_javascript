 const result = console.log("Hello World");
 console.log(result); // Output: undefined


 function sumNumbers(a, b) {
    const result = a + b;
    console.log(result);
}

const greetworld = function() {
    console.log("Hello World");
}

const convertCelsiusToFahrenheit = function(temperature) {
    const result = (temperature * 9/5) + 32;
    return result;
};

const temperatureInCelsius = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi : ",temperatureInCelsius); // Output: 77

function multipyl(a,b) {
    return a * b;
}

function calculate(oparation, numA, numB)  {
    return oparation(numA, numB);
}

const reresult = calculate(multipyl, 5, 10);
console.log(reresult)

console.log("bagian_2");

function mulitplir(X) {
    return function(num) {
        return X * num;

    };
}

const double = mulitplir(2);
const triple = mulitplir(3);

console.log(double(10));
console.log(triple(11));