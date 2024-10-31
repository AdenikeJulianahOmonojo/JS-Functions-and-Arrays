// Create a Function for Temperature Conversion
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Example usage:
const fahrenheitValue = 68; // Example Fahrenheit value
const celsiusValue = convertToCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}°F is equal to ${celsiusValue.toFixed(2)}°C`);

// Create a Function with Multiple Parameters and Return
function createGreeting(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Example usage:
const greetingMessage = createGreeting("Adenike", 37);
console.log(greetingMessage);

// Manipulate an Array of Numbers
// Step 1: Create the array
let numbers = [1, 2, 3, 4, 5];

// Step 2: Add the number 6 to the end of the array
numbers.push(6);

// Step 3: Remove the first element from the array
numbers.shift();

// Step 4: Add 0 to the beginning of the array
numbers.unshift(0);

// Step 5: Convert the array into a string of numbers separated by a hyphen
const resultString = numbers.join('-');

// Output the result
console.log(resultString);

// Double the Values with `map()
// Create a new array with each number doubled
let doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [0, 4, 6, 8, 10, 12]

// Filter Out Odd Numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Should output: [0, 2, 4, 6]