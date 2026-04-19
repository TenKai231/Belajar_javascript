let temperatureInFahrenheit = null;

const convertCelsiusTofarenheitUsingFunction = function (temperatureInCelsius) {
    const result = (temperatureInCelsius * 9/5) + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusTofarenheitUsingFunction(90);
console.log("Hasil konversi : ",temperatureInFahrenheit); // Output: 77`

// Deklasi function dengan Arrrow funtion 

const convertCelsiusToFahrenheitUsingArrowFunction = (temperatureInCelsius) => {
    const result = (temperatureInCelsius * 9/5) + 32;
    return result;
    
};

temperatureInFahrenheit = convertCelsiusTofarenheitUsingFunction(90);
console.log("Hasil konversi : ",temperatureInFahrenheit); // Output: 77`


// refaction 


// arrow function Versi ringkas 
const convertCelsiusToFahrenheitUsingArrowFunction2 =
(temperatureInFahrenheit) => (9/5 * temperatureInFahrenheit) + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction2(90);
console.log("Hasil konversi : ",temperatureInFahrenheit); // Output: 77`