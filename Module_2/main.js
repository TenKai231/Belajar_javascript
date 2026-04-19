function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(convertToFahrenheit(25));
const celsius = 25;
const fahrenheit = convertToFahrenheit(celsius);
console.log('Hasil konversi: ' + fahrenheit + ' °F');

gretworld();

function gretworld() {
    console.log("Hello World");
}


// function convertCelsiusToFahrenheit(temperature) {
//     if (temperature !== undefined) {
//         const tempFahrenheit = (temperature * 9/5) + 32;
//         console.log(`Hasil konversi: ${tempFahrenheit} °F`);
//     }
// }

// console.log(convertCelsiusToFahrenheit(30)); // Output: Hasil konversi: 86 °F


function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
     
    console.log('Hasil konversi:', temperatureInFahrenheit);
    }

convertCelsiusToFahrenheit(); // Output: Hasil konversi: 122

