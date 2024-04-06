"use strict"; //treat all JS code as a newer version

// alert(3+3) //error: ReferenceError: alert is not defined. Here we are using nodejs as engine. this will create a pop up in the browser.
//todo: how to use alert in node.

// code should have readability. 
// console.log(1+1); console.log('nusrat'); //problem: code will work but not readable. It is not recommended.

let name = "Nusrat"; //String Type
let age = 24; // Number type
let isLoggedIn = true; //boolean type


/**
 * Primitive Data Types
 * 1. number
 * 2. bigInt => large scale applications like trading, stock market, big giant company
 * 3. string => "" or ''
 * 4. boolean => true/false 
 * 5. null => standalone value. representation of a empty value.
 * 6. undefined
 * 7. symbol => unique
 * 
 * Non Primitive Data types
 */

// console.log(typeof name); //output: string
// console.log(typeof age); //output: number
// console.log(typeof isLoggedIn); //output: boolean
// console.log(typeof null); //output: object.
// console.log(typeof undefined); //output: undefined
