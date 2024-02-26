// JavaScript for Loop

// Write a function that takes a number as an argument and prints the multiplication table for that number up to 10, using a for loop.

function multiplied(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(number * i);
    }
}
multiplied(4);

//example
function multiplied(number) {
    let result = []
    for (let i = 0; i <= 10; i++) {
        result.push(number * i);
    }
    return result;
}
console.log(multiplied(4));
//questions - im getting an undefined at the very end 

//Create a function that takes an array of numbers and returns the sum of all the numbers, using a for loop.

function addAll(numbers) {

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(addAll([2, 4, 7, 12, 2]));
//need slocal or global variable

// Write a function that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in the string, using a for loop.

function vowels(string) {

    const vowels = ['a', 'e', 'i', 'o', 'u']; // am i able to just do 'aeiou'?? 'aeiuo' because you have to split
    let vowelCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) { //i is incrimenting through each letter of the string
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(vowels('gary is making progress'));
//questions -  just need to study the layout

// Create a function that takes a number as an argument and returns true if it's a prime number, false otherwise, using a for loop.

function prime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(3));
console.log(prime(6));
console.log(prime(9));

//Write a function that takes an array of strings and returns a new array with only the strings that start with a vowel (a, e, i, o, u), using a for loop.

function stringFilter(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = []

    for (let i = 0; i < string.length; i++) {

        const firstChar = string[i].toLowerCase()[0];
        //dez example
        //const firstChar = string[i].toLowerCase()
        //const letter = firstChar[0]

        if (vowels.includes(firstChar)) {
            /* The line `result.push(string[i]);` is pushing the entire string at index `i` into the
            `result` array. This means that the entire string that meets the condition in the loop
            (having a vowel as the first character) will be added to the `result` array. */
            result.push(string[i]);
        }

    }
    return result;
}
console.log(stringFilter(['Alice', 'alice', 'ed', 'Greg', 'gary']));

// Create a function that takes a number as an argument and returns the factorial of that number, using a for loop.

function calcFactorial(number) {
* dez example with the call back function
TODO    if (number === 0 || number === 1) {
        return 1;
    } 
    else {
        return number * calcFactorial/* In the context of the `calcFactorial` function, `(number - 1)`
        is used as a recursive call to calculate the factorial of a
        number. */
        (number - 1);
    }


     let factorial = 1;

    for (let i = 1; i <= number; i++) {
        /* The expression `factorial *= i;` is shorthand for `factorial = factorial * i;`. It is used
        to calculate the factorial of a number in the `calcFactorial` function. */
        factorial *= i;
    }
    return factorial;
}
console.log(calcFactorial(4));
console.log(calcFactorial(3));
// cant use o for i because it will multiply your number by the index which is set to 0

// Write a function that takes an array of numbers and returns the average of those numbers, using a for loop.
function sumAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        /* The line `sum += numbers[i];` is adding the value of the element at index `i` in the
        `numbers` array to the `sum` variable. This operation is accumulating the sum of all the
        numbers in the array as the loop iterates through each element. */
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(sumAverage([12, 8, 6, 2]));

Create a function that takes a string as an argument and returns the reverse of that string, using a for loop.

function reversed(string) {
    let reversedString = ''
/* `string.length - 1` is used to get the index of the last character in the string.
    In JavaScript, strings are zero-indexed, meaning the first character is at index 0,
    the second character is at index 1, and so on. By subtracting 1 from the length of
    the string, we get the index of the last character in the string. This is commonly
    used in loops when iterating over a string in reverse order, as in the case of
    reversing a string. */
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;

}
console.log(reversed('merriman'));

Write a function that takes a number as an argument and prints all the prime numbers up to that number, using a for loop.


function filterPrime(number) {
    for (let i = 2; i <= number; i++) {
        if (number <= 1) {
            return false;
        }

    }

}
// Create a function that takes an array of strings and returns a new array with the strings reversed, using a for loop.

function revArray(string) {
    const reversedString = [];

    for (let i = 0; i < string.length; i++) {
        reversedString.push(string[i].split('').reverse().join('')); //'' is taking everything within the string to manipulate
    }
    return reversedString;
}
console.log(revArray(['gary', 'cameron','connie']));