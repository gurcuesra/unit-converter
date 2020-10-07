// Kelvin to Celsius, then to Fahrenheit 

const kelvin = parseInt(prompt("Please enter Kelvin degree!"));
// Kelvin variable has own value and it will never change. That's why, I will make as constanted variable.

let celsius = kelvin - 273;
// For calculating the Celsius: there is 273 degree difference between Kelvin to Celsius. Kelvin is bigger than the Celcius. That's why, I will did the "kelvin -273" for calculating the Celsius degree.

let fahrenheit = celsius * (9/5) + 32;
// Above calculation is the formula of the Celsius to Fahrenheit degree

fahrenheit = Math.round(fahrenheit);
// Fahrenheit formula will give the decimal number. For eliminating the decimal numbers, good to use the "Math.round()" method.

alert(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// 12 -> Celsius to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
alert(`The temprature is ${newton} Newton.`);


// 13 -> Challange -> Mile/Hour to Kilometer/Hour
const mile = parseInt(prompt("Please enter the mph!"));
let km = mile * 1.6;
alert(`${mile} mph is ${km} kmph!`);