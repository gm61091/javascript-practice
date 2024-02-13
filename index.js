//Question 1
//Write a basic function named sum that takes two numbers as parameters, a and b, and returns their sum.

//function sum(a, b){
//    return a + b;
//}
//console.log(sum(3, 8));

//returned 11 in node

//Question 2
//Create an arrow function square that takes a single parameter x and returns its square.

// let square = (number) => number * number

// console.log(square(5));

//qusetions fro dez - why no curly braces ???????????????

//Question 3
//Define an anonymous function stored in a variable named multiply that takes two parameters and returns their product.

// var multiply = function(a, b) {
//     return a * b;
// }
// console.log(multiply(4, 8));

//node index.js = 32
// question for dez  why would you use this ?

// Question 4
// Write a function greet that takes a name as a parameter and logs Hello, [name]! How are you today?.

// function greet(name) {
//     return 'Hello ' + (name) + ' how are you?';
// }
// console.log(greet("gary"));

//questions are there other ways?? i read about tyemperate literals another way
//${name} - example
//also adding extra spaces for concat

//Question 5
//Create an arrow function isEven that checks if a given number is even. It should return true if the number is even and false otherwise.

// const isEven = (number) => {
//     return number % 2 === 0;
// }
// console.log(isEven(7));

//returned false

//  arrow function uses the modulo operator (%) to check if
// the given number divided by 2 has a remainder of 0. 
//If it does, the function returns true, indicating that the number is even; otherwise, it returns false.

//questions  where doe this indicate true or false?

//Question 6
//Define a basic function findMax that takes two numbers as parameters and returns the larger of the two.

// function findMax (num1, num2) {
//     return Math.max(num1, num2);
// }
// console.log(findMax(4, 9));

//Math.max() function is used to find the maximum value between number1 and number2.
// The function returns the larger of the two numbers.
// You can use this function by providing your own numbers as arguments.

//questions for dez - where can i find more of the function operators?

//Question 7
//Create a function convertToUpperCase that takes a string and returns the same string in uppercase. Use a basic function declaration.

// function convertToUpperCase(inputString) {
//     return inputString.toUpperCase();
// }
// console.log(convertToUpperCase('hello is this upper case?'));

//returen all caps

//questions dor dez- where can i find a better list of methods and 

//Question 8
//Write an arrow function findMin that takes three numbers as parameters and returns the smallest of the three.

// let findMin = (num1, num2, num3) => {
//     return Math.min(num1, num2, num3);
// }

// console.log(findMin(33, 56, 13));

//returned 13 so it works
// questions dez - whats the benifit to arrow as to basic? and when does anonymous need to be used?

//Question 9
//Define a function named concatStrings that takes two strings, string1 and string2, and returns their concatenation.

// function concatStrings(string1, string2) {
//     return string1 + string2;
// }
// console.log(concatStrings('this should', ' come together'));

//remeber to add spaces in between strings

//Question 10
//Create an anonymous function stored in a variable reverseString that takes a string and returns it reversed.

// var reverseString = function(inputString) {
//     return inputString.split('').reverse('');
//     //return inputString.split('').reverse().join('');
// }
// console.log(reverseString('merriman'));

//returned merriman with the join method but also "n","a","m" with the split method no join
//questions - do i have to splt the string up to reverse it ? it would nt work just reverse.

//Question 11
//Write a basic function calculateDifference that takes two parameters, a and b, and returns the difference (a - b).

// function calculateDifference(a, b) {
//     return a - b;
// }
// console.log(calculateDifference(45, 21));

//result = 24 in node.
//no questions

//Question 12
//Write a function areBothEven that takes two numbers as parameters and returns true only if both numbers are even. 

function areBothEven(num1, num2) {
    return num1 % 2 === 0 && num2 % 2 === 0;
}
console.log(areBothEven(24, 88));

//ran a true and false successfully

//question for dez - modulo operator and comparing to 0