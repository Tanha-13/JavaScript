// a variable is a container for a value
const name = "Nusrat";
// console.log(`Hello ${name}, Welcome to this blog!!`);

// declaring a variable and initializing a variable
// typing the variable name, followed by an equals sign(=), followed by the value.

// var issue
myName = 'Nusrat';
function logName(){
    console.log(myName);
}

logName();
var myName;
// this code is working because of hoisting.

// let myName;
// if we use let instead of var, it will generate error - ReferenceError: Cannot access 'myName' before initialization. Declaring a variable after initialize it results in confusing, harder to understand.


//info: typeof operator returns the data type of the variable.
let myNumber = "500";
// console.log(typeof myNumber); //string
myNumber = 500;
// console.log(typeof myNumber); //number

//constant variables - declaring + initializing and can not be redeclared and reassigned

//imp: use const when you can, use let when you have to. This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

//links
/*
01. First step: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables 
02. const declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
03. let declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
04. var declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

05. grammar and types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
*/ 