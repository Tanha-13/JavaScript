// let score = "33";
// let score ="33abc";
// let score = null;
// let score = undefined;
let score = "";
// console.log(typeof score); //output:string (input: 33, 33abc)
// console.log(typeof score); //output: object (input: null)
// console.log(typeof score); //output: undefined

//explicitly converting to number using Number class
let valueInNumber = Number(score);
// console.log(valueInNumber); //output: NaN (input: 33abc)
// console.log(valueInNumber); //output: 0 (input: null)
// console.log(valueInNumber); // output: NaN (input: undefined)
// console.log(valueInNumber); //output: 0 (input: empty string "")
// console.log(typeof(valueInNumber)); //output:number


// checking the value
// let requestedResult = typeof score;
// console.log(requestedResult);

// if(requestedResult === "number"){
//     console.log('right');
// }

/**
 * imp: any data type to number
 * 01. string holds numeric value => pure number. example: "33" => 33. 
 * 02. string holds string value => NaN. "33abc" => NaN or "Nusrat" => NaN. but empty string "" => 0.
 * 03. boolean - true => 1, false => 0.
 * 04. null converts to pure number (0). null => 0.
 * 05. undefined => NaN.
 * 
 */

// number to boolean
// let isLoggedIn = 1;
// let isLoggedIn = 23;
// let isLoggedIn = null;
let isLoggedIn = undefined;
// let str = ""; //empty string
let str = "nusrat";
let booleanIsLoggedIn = Boolean(isLoggedIn);
let strInBoolean = Boolean(str);
// console.log(booleanIsLoggedIn); // output: true(input: 1)
// console.log(booleanIsLoggedIn); //output: true (input: 23)
// console.log(booleanIsLoggedIn); // output: false (input: null)
// console.log(booleanIsLoggedIn); // output: false (input: undefined)
// console.log(strInBoolean); // output: false(input: "")
// console.log(strInBoolean); // output: true(input: "nusrat")

/**
 * imp: any data type to boolean
 * 1. number to boolean: 1 => true, 0 => false, any number => true.
 * 2. string to boolean: "" => false, "anyValue" => true.
 * 3. null to boolean: null => false
 * 4. undefined to boolean: undefined => false
 * 
 */

/***************** Operations ******************** */

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

//console.log(2+2); // 4
//console.log(2-2); // 0
//console.log(2*2); // 4
//console.log(2**3); // 8
//console.log(2/3); // 0.67
//console.log(2%3); // 2

let str1 = "Nusrat ";
let str2 = "Tanha";
let str3 = str1 + str2; // Nusrat Tanha

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log( 3+ 4 * 5 % 3) //5

//todo: associativity and Operator Precedence

let num1,  num2, num3;
num1 = num2 = num3 = 4; // not recommended because of readability.
// console.log(num1, num2, num3);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 