//######  methods:
push
// push(element1, ..., elementN): Adds one or more elements to the end of an array and returns the new length.
// push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

pop
// pop(): Removes the last element from an array and returns that element.
// pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

unshift
// unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length.
// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

shift
// shift(): Removes the first element from an array and returns that element.
// shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

concat
// concat(array2, ..., arrayN): Combines two or more arrays.
// concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

slice
// slice(start, end): Returns a shallow copy of a portion of an array from the specified start to the specified end.
// slice() method slices out a piece of an array into a new array:
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

splice
// splice(start, deleteCount, item1, ..., itemN): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

indexOf
// indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

includes
// includes(element, fromIndex): Determines whether an array includes a certain element, returning true or false as appropriate.
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

forEach
// forEach(callback(currentValue, index, array), thisArg): Executes a provided function once for each array element.
// forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

map
// map(callback(currentValue, index, array), thisArg): Creates a new array with the results of calling a provided function on every element in the array.
// map() method creates a new array by performing a function on each array element.
// map() method does not execute the function for array elements without values.
// map() method does not change the original array.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

filter
// filter(callback(currentValue, index, array), thisArg): Creates a new array with all elements that pass the test implemented by the provided function.
// filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

reduce
// reduce(callback(accumulator, currentValue, index, array), initialValue): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// reduce() method runs a function on each array element to produce (reduce it to) a single value.
// reduce() method works from left-to-right in the array. See also reduceRight().
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

reverse
// reverse(): Reverses the elements of an array in place.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse()

sort
// sort(compareFunction): Sorts the elements of an array in place.
// sort() method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();


// These are just a few of the many methods available for working with arrays in JavaScript. Each method serves a specific purpose and can be combined to perform various array manipulations.


//####### Types of loops

for loop:
The for loop is used when you know the number of iterations in advance.

for (let i = 0; i < 5; i++) {
    console.log(i);
  }


while loop:
The while loop is used when the number of iterations is not known in advance, and the loop continues as long as the specified condition is true.

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


do-while loop:
The do-while loop is similar to the while loop, but the condition is evaluated after the loop body. This ensures that the loop body executes at least once.

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


for...in loop:
The for...in loop is used to iterate over the properties of an object. It enumerates the properties of an object, including inherited properties.

const person = { name: 'John', age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}


for...of loop:
The for...of loop is introduced in ECMAScript 6 (ES6) and is used to iterate over iterable objects, such as arrays and strings.

const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
