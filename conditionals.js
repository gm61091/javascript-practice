// ### Basic If Statement

// ```javascript
// if (condition) {
//   // Code to execute if the condition is true
// }
// ```
//example
let age = 25;

if (age > 21) {
    console.log('you can buy beer!');
}
// returns string

// ### If/Else Statement

// ```javascript
// if (condition) {
//   // Code to execute if the condition is true
// } else {
//   // Code to execute if the condition is false
// }
// ```
//example
let age = 34;

if (age < 21) {
    console.log('you are not old enough to buy alcohol');
}
else{
    console.log('you may buy a beer');
}

// worked for above 21 and below

// ### If/Else If/Else Statement

// ```javascript
// if (condition1) {
//   // Code to execute if condition1 is true
// } else if (condition2) {
//   // Code to execute if condition2 is true
// } else {
//   // Code to execute if none of the conditions are true
// }
// ```
//example

let kd = .76;

if (kd >= .75) {
    console.log('you have a good kd!');
}
else if (kd >= .50) {
    console.log('your kd is not very good..');
}
else if (kd >= .25) {
    console.log('your kd is trash.');
}
else {
    console.log('you should probably find  a new game or hobby.');
}

//all statements worked in node

// ### Nested If/Else Statement

// ```javascript
// if (condition1) {
//   if (condition2) {
//     // Code to execute if both condition1 and condition2 are true
//   } else {
//     // Code to execute if only condition1 is true
//   }
// } else {
//   // Code to execute if condition1 is false
// }
// ```

let temperature = 76;
let timeOfDay = 'evening';

if (temperature <= 75) {
    console.log('Its so nice out!');

    if (timeOfDay === 'evening') {
        console.log('good evening!');
    }
    else {
        console.log('good day sir!')
    }
}
else {
    console.log('its hot out here!');
}

// questions for dez - variable values need to be strings for words?


//#### Ternary Operators

// ### Basic Ternary Operator

// ```javascript
// let result = (condition) ? trueValue : falseValue;
// ```

let sunOut = false;

let message = sunOut ? "GUNS OUT!" : "i guess i will stay inside.";

console.log(message);

// true and false worked
//question - is this a better way than the if else?
// the ? is a boolean that evaluates true/false and the : sepearates the true/false

// ### Nested Ternary Operator

// ```javascript
// let result = (condition1) ? (nestedCondition1 ? value1 : value2) : 
// (condition3 ? value3 : value4);
// ```


let isNotSunday = false;
let isOpen = false;

let getChikfila = (isNotSunday) ? (isOpen ? 'Praise be to god we can have Chikfila!' : 'we have to wait for it to open...')
 : 'we can still go to freddys!';

 console.log(getChikfila);

 // all options worked for true and false on both variables
 //questions - the paranthesis on the last string why isnt it needed?

//  ### Ternary Operator in Return Statement

// ```javascript
// function exampleFunction(parameter) {
//   return (parameter === 42) ? "Answer to the Ultimate Question of Life, the Universe, and Everything" : "Not the answer";
// }
// ```
example
function isEven(number) {
    return (number % 2 === 0) ? 'the number is even' : 'the number is odd'
}
console.log(isEven(4));
console.log(isEven(9));

//arrow function example
const isEven = (number) => (number % 2 === 0 ? 'even' : 'odd');

console.log(isEven(4));
console.log(isEven(7));

// questions - why no curly boys??

// ### Using Ternary Operator for Assignment

// ```javascript
let status = (isOnline) ? "Online" : "Offline";
// ```
// question is what is even happening?

