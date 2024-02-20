// //JavaScript Array Methods

// // Write a function that takes an array of numbers and returns the sum of all the positive numbers, using the reduce method.

// function posNum(numbers) {
//     return numbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
// }
// console.log(posNum([1, 2, -3, 5, -9, 0]));
// // returned 8
// //questions - im seeing a pattern at the end where this zero or in previous questions its an empty string.

// // Create a function that takes an array of strings and returns a new array with only the strings that have more than three vowels, using the filter method.

// function filterVowel(string) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return string.filter(string => {

//     })
// }

// // Write a function that takes an array of numbers and returns a new array with each number squared, using the map method.

// function squareNum(numbers) {
//     return numbers.map(numbers => numbers ** 2);
// }
// console.log(squareNum([1, 2, 3, 4, 5, 6, 7]));
// // question -  could i have used curly boys in the arrow function?

// // Create a function that takes an array of strings and returns the longest string in the array, using the reduce method.

// function isLongest(string) {
//     return string.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
// }
// console.log(isLongest(['merriman', 'johnson', 'gary', 'cameron']));
// // questions - the array methods md walked me through the structure of this. 

// // Write a function that takes an array of numbers and returns a new array with only the numbers that are multiples of 5, using the filter method.

// function timesFive(numbers) {
//     return numbers.filter(numbers => numbers % 5 === 0);
// }
// console.log(timesFive([2, 4, 5, 10, 30, 14]));
// // no questions

// // Create a function that takes an array of strings and returns a new array with the strings sorted by length, shortest to longest, using the sort method.

// function shortest(string) {
//     return string.sort((short, long) => short.length - long.length); // having issues understanding where the length sorting comes in
// }
// console.log(shortest(['gary', 'cameron', 'kathy', 'callie', 'stephanie']));

// // Write a function that takes an array of numbers and returns the product of all the numbers, using the reduce method.

// function productOf(numbers) {
//     return numbers.reduce((product, numbers) => product * numbers, 1); //why is this not set to 0? instead of one
// }
// console.log(productOf([2, 4, 6, 7, 10]));
// // question - im just having issues with the last part.

// // Create a function that takes an array of strings and returns a new array with only the strings that contain the letter 'a', using the filter method.

// function findA(string) {
//     return string.filter(string => string.includes('a'));
// }
// console.log(findA(['bob', 'allen', 'cindy', 'babe']));
// // no questions now that i understand the arrow function setup

// // Write a function that takes an array of numbers and returns a new array with only the numbers that are perfect squares, using the filter method.

// function squareFilter(numbers) {
//     return numbers.filter(numbers => Math.sqrt(numbers) % 1 === 0);
// }
// console.log(squareFilter([3, 5, 7, 9, 55, 25, 81]));
// // questions - im having trouble with why its trying to understan why we are checking for odd.

// // Create a function that takes an array of strings and returns a new array with the strings capitalized, using the map method.

// function allCaps(string) {
//     return string.map(string => string.toUpperCase());
// }
// console.log(allCaps(['gary', 'cameron', 'mErRiMaN']));
// //questions - none