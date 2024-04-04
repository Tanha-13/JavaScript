// write variable name that can be easily readable and meaningful.

//info: variable using const keyword can be changed. 
const accountId = 144553;
let accountEmail = 'nusrat@gmail.com';
var accountPassword = '12345';
accountCity = "Dhaka"; //problem: not recommended.
let accountState; //output: undefined

// to check if the value of the variables changeable or not

// accountId = 2; //error: TypeError: Assignment to constant variable.
// accountEmail = 'tanha@gmail.com'; //output: tanha@gmail.com
// accountPassword = '21212121'; //output: 21212121
// accountCity = 'Bangladesh'; //output: Bangladesh

console.table([accountEmail,accountPassword,accountCity, accountState]);


/**
 * Prefer not to use var because of issue in block scope and functional scope.
 */