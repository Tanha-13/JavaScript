//call by value and call by reference
// how variables are stored in memory and how they are accessed
// Primitive - Number, bigInt, string, boolean, null, undefined, symbol(is used to make a unique value)


//todo: dynamically typed, statically typed, weakly typed, strongly typed

const score = 100; //number type value
const scoreValue = 100.3; // number type value.
const isLoggedIn = false; // boolean type value
const outsideTemp = null; // null type
let userEmail; // undefined value

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); //false

const bigNumber = 12345667895467895436789n;
// console.log(typeof bigNumber); //bigint

// Non primitive or reference type - object, array, function

const heros = ['Ironman', 'Spiderman'];
const userDetails = {
    userName: 'Tanha',
    userId: '201',
    age: 24,

}
const myFunction = function(){
    console.log("Hello World");
}

myFunction();
console.log(typeof myFunction); //function or function object or object function

// https://262.ecma-international.org/5.1/#sec-11.4.3 