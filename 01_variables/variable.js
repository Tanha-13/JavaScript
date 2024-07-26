"use strict" // treat all JS code as newer version


// topic: covered topic
/**
 * 01. Variable
 * 02. const keyword
 * 03. let keyword
 * 04. var keyword
 * 05. Variable Naming
 */
/**
 * A variable is a container or named storage for a value/data. Variable stores the data which can be changed or used when we need. The default value of a variable is undefined.
 * // todo: why it is important to use a variable
 * A variable that exists but has no defined value is differ from a variable that does not exist at all. No value defined means that the variable is created but it has no value inside it.
 * Use camel case to initialize a variable. In camel case variable, first word is lower cased and then rest subsequent words are capitalized. Example: myFirstName.
 * Make variable name intuitive, so they describe the data they contain. Don't just use single letters/numbers, or bit log phrases.
 */
// three ways to declare a variable using const, let, and var keyword. declaring a variable and initializing a variable, typing the variable name, followed by an assignment operator(=), followed by value.

// topic: const - used for constant(unchanging) variables.
//declaring + initializing
//const keyword is used to declare a constant variable instead of let keyword.
const accountId = 144553;
// changing const variable: 
//imp: const variable can not be re-declared nor re-assigned.
//const accountId = 2; // error: SyntaxError: Identifier 'accountId' has already been declared.
//accountId = 2; // error: TypeError: Assignment to constant variable. Value can not be changed

//imp: use const when you can, use let when you have to. This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

// topic: let -  declare a variable using let keyword and assign value using assignment operator.
let accountEmail = 'tanha@gmail.com';
// changing let variable: //imp: value can be changed. This variable can be reassigned.
accountEmail = 'nusrat@gmail.com'; // output: 'nusrat@gmail.com'
//imp: this variable can be copied to another variable.
 let personalEmail = accountEmail; // // output: 'nusrat@gmail.com'
 // imp: variable can not be re-declared.
 //let accountEmail = 'hello@gmail.com'; // error: SyntaxError: Identifier 'accountEmail' has already been declared.

// topic: var - used to declare variables before ES6.
// prefer not to use var keyword because of issue in block scope and functional scope
// The design of var is confusing and error-prone.
var accountPassword = '12345';
// changing the variable
accountPassword = '353';
// console.log(accountPassword); // output: '345'

//another way to declare a variable without a variable keyword. But this is not a good practice.
// accountCity = "Dhaka";
// while using "use strict", this code is giving an error
// console.log(accountCity); // error: ReferenceError: accountCity is not defined


/**********Addition*********** */
// declaring multiple variables in one line. But this is not recommended. Code should have better readability.
let name = 'tanha', age= 24, id='201';
// console.table([name,age,id]); 
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'tanha' │
│    1    │   24    │
│    2    │  '201'  │
└─────────┴─────────┘
*/

// use this
let userName = 'tanha';
let userAge = 34;
let userId = 45;

// or you can write
let currentName = 'tanha',
    currentAge = 45,
    currentId = '211';


// topic: Variable Naming
/**
 * 01. The name must contain letters, digits, or the symbols '_' and '$'.
 * 02. The first character must not be a digit.
 * 03. Hyphens are not allowed in variable names.
 * 04. case sensitive. Example: apple and APPLE are different.
 * 05. Keywords(reserved words) can not be used as variable names because the language itself uses them.
 */

// A variable name should have a clean, obvious meaning, describing the data. Some good-to-follow rules are:
/**
 * ◽ use human-readable names like userName or shoppingCart.
 * ◽ Avoid abbreviations or short names like a,b,c or x,y,z.
 * ◽ descriptive and concise.
 * ◽ use different variables for different values. An extra variable is good, not evil. Modern minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can help the engine optimize your code.
 */











//links - MDN
/*
01. First step: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables 
02. const declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
03. let declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
04. var declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

05. grammar and types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
*/ 