"use strict"
// alert(3+3); //error: ReferenceError: alert is not defined.
// info: here we are using node js as our js engine. This will create a pop up in the browser.
//todo: how to use alert in node js


/*******************Data Types******************* */
/**
 * Data types are divided into two categories: Primitive and non-primitive. These are divided based on call by value and call by reference(how data are stored in memory and how data are accessed from memory)
 */
// topic: Primitive Data Types
/**
 * call by value. 7 types
 * 01. number
 * 02. bigInt - BigInt is used for large numeric values. It doesn't represent decimal values.It is used to represent values greater than 2(53-1).
 * 03. String - "" or '' or ``
 * 04. boolean - It can hold only two values - true and false. Boolean values also come as a result of comparisons.
 * 05. null - standalone value. It means 'no value' assign to variable. Null is treated as false value
 * 
 * 06. undefined - accessing an uninitialized variable returns undefined. Accessing a non-existing property of an object returns undefined. Accessing a out-of-bounds array element return undefined.
 * 07. symbol - uniqueness
 */

// checking the type of different values
// typeof operator returns the data type of a variable.
typeof 3.453; // number
typeof 1234523532n; // bigint 
typeof "hello"; // string
typeof true; // boolean
typeof null; // object
typeof undefined; // undefined
typeof Symbol('123'); // symbol

const score = 100; // Number
const scoreValue = 100.3 // Number
const bigNumber = 12345667n; // BigInt - by appending 'n' at the end of numeric values.
const userName = 'Nusrat'; // String - this variable is called a string because it has ASCII characters.
const isLoggedIn = true ; // Boolean
const outsideTemp = null; // null 
// const userEmail; //error: SyntaxError: Missing initializer in const declaration
let userEmail; // undefined


const id = Symbol('123');
let anotherId = id;
anotherId = Symbol('456');
// console.log(id, anotherId);


// topic: Non primitive or Reference type
/**
 * 01. Object
 * 02. Array
 * 03. RegExp
 * 04. functions
 */
const heros = ['shaktiman', 'naagraj', 'doga'];
typeof heros; // object
// to identify an array from object, we can check using Array.isArray(arr). It returns true when the variable is an array. Otherwise returns false.
Array.isArray(heros); // true

let obj = {
    employeeName : 'Hitesh',
    employeeAge: 34
}
typeof obj; // object
Array.isArray(obj); // false

const myFunction = function(){
    return 'hello world!';
}

console.log(typeof myFunction); //function