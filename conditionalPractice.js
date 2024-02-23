// #####$#JavaScript If/Else Statements and Ternary Operators

// Write a function that takes a number as an argument and returns "positive" if it's greater than zero, "negative" if it's less than zero, and "zero" if it's equal to zero, using a ternary operator.

function numCheck(number) {
    // let number = 7; didnt work?
 
     const result = number > 0 ? 'possitive number' : number < 0 ? 'negative number' : 'zero';
     return result;
 }
 console.log(numCheck(8));
 console.log(numCheck(-7));
 console.log(numCheck(0))
 //questions - why no parenthesis?


// Create a function that takes three numbers as arguments and returns the largest number, using an if/else statement.

function largestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(largestNumber(81, 73, 90));
console.log(largestNumber(13, 45, 78));
console.log(largestNumber(19, 20, 11));
// // no questions

// Write a function that takes a string as an argument and returns "uppercase" if the string is in all uppercase letters, "lowercase" if it's in all lowercase letters, and "mixed case" if it's a mix of uppercase and lowercase letters, using if/else if/else statements.

function isCaps(string) {
    if (string === string.toUpperCase()) {
        return 'ALL CAPS';
    }
    else if (string === string.toLowerCase()) {
        return 'no caps';
    }
    else {
        return 'MiXeD';
    }
}
console.log(isCaps('heLlo'));
console.log(isCaps('hola'));
console.log(isCaps('HELLO'));
//no questions
//

// Create a function that takes an array of numbers and returns a new array containing only the even numbers, using a ternary operator.
//dez code 
// function namehere (result, num) => {
// return num % 2 === 0 ? result.concat(num) : result, []
// }
//  function evenNum(array) {
//      return array.reduce((result, num) => num % 2 === 0 ? result.concat(num) : result, []);
// }


function evenNum(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
    array[i] % 2 === 0 ? newArr.push(array[i]) : null
    }
    return newArr
    }
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));
//questions - many

// Write a function that takes a number as an argument and returns "fizz" if the number is divisible by 3, "buzz" if it's divisible by 5, and "fizzbuzz" if it's divisible by both 3 and 5, using a ternary operator.

function buzzyBee(number) {
    return number % 3 === 0 ? number % 5 === 0 ? 
    'fizzbuzz' 
    : 'fizz' 
    : number % 5 === 0 
    ? 'buzz'
    : number
}
console.log(buzzyBee(12));
console.log(buzzyBee(150));
console.log(buzzyBee(125));
console.log(buzzyBee(1));
//questions - finally worked after i removed the end semi colon.

// Create a function that takes a string as an argument and returns "palindrome" if the string is a palindrome (reads the same forwards and backwards), and "not a palindrome" otherwise, using an if/else statement.

function isSame(string) {
    if(string === string.split('').reverse().join('')) {
        return 'palindrome';
    }
    else {
        return 'not a palindrome';
    }
}
console.log(isSame('radar'));
console.log(isSame('radaar'));

// Write a function that takes two numbers as arguments and returns the sum of the square of those numbers, using a ternary operator.

function squareNum(num1, num2) {
    return num1 >= 0 && num2 >= 0 ? num1 ** 2 + num2 ** 2 : "negatives";
}
console.log(squareNum(56, 90));
console.log(squareNum(0, 17));
console.log(squareNum(56, -3));
//questions - why did the && worl here and not the other

// Create a function that takes an array of strings and returns a new array with only the strings that have a length of at least 5 characters, using a ternary operator.

function isTooLong(array) {
/* This line of code is using the `reduce` method on the `array` to filter out strings that have a
length of at least 5 characters. */
    return array.reduce((result, string) => string.length >= 5 ? result.concat(string) : result, []);
}
console.log(isTooLong(['shshsh', 'testest', 'wow']));
//questions = need more understanding on result, []

// Write a function that takes a number as an argument and returns "even" if the number is even and greater than 10, "odd" if it's odd and greater than 10, and "invalid" if it's less than or equal to 10, using a ternary operator.

function numCheck(number) {
    return number >= 10 ?
    number % 2 === 0 ?
    'even and over 10' : 
    'odd and over ten' : 
    'not over ten';
}
console.log(numCheck(19));
console.log(numCheck(10));
console.log(numCheck(9));
// no questions

// Create a function that takes a string as an argument and returns the first character of the string in uppercase, using a ternary operator.

function firstLetCap(string) {
    return string.length > 0 ? string[0].toUpperCase() + string.slice(1) : null;
}
console.log(firstLetCap('gary'));
console.log(firstLetCap(10));
console.log(firstLetCap('gary Merriman'));
//questions - none