// topic: Function Declaration - to create a function
// info: the function keyword goes first, followed by the name of the function, a parentheses, the code of the function(the function body) goes between curly braces.
// todo: function declaration, function definition, function expression

function functionName(parameter1, parameter2,... parameterN){

    // function body
}

// Example: 
function showMessage(name){
    console.log(`Hello ${name}`);
}

// the call showMessage() will execute the code of the function.
// showMessage('John'); // output: Hello John

// topic: local variable and outer variable
// a function can access an outer variable. You can modify that variable inside the function(if you declare it using let. variable declared using const keyword can not be changed.)
//A variable declared inside a function is only visible inside that function.

// imp: to make the code clean and easy to understand, it's recommended to use mainly local variables and parameters in the function, not outer variable.

let lastName = 'Bob';
function checkVariable(){
    let firstName = 'John';
    lastName = 'Denny';
    console.log(`Hello ${firstName} ${lastName}`);
}
// checkVariable();
// console.log(firstName); // error: ReferenceError: firstName is not defined.
// console.log(lastName); //output: Bob

// topic: Parameter and argument
// a parameter is the variable listed inside the parentheses in the function declaration.
// an argument is the value that is passed of the function when it is called.

// values passed to a function as parameters are copied to its local variables.

// topic: Default values
// In JS, a default parameter is evaluated every time the function is called without the respective parameter.
// if function is called, but an argument is not provided, then corresponding value becomes undefined.
function showUserName(userName = 'John'){
    console.log(`Your username is ${userName}`);
}
// showUserName(); // output: Your userName is undefined.
// showUserName(); // output: Your userName is John.

// old tricks to use default values for parameters
function oldFunction(text){
    if(text === undefined){
        text = 'relevant value';
    }
    //another way
    text = text || 'relevant value';
}
// todo: default parameter declaration using nullish coalescing operator

// topic: Returning a value
// A function can return a value back into the calling code as the result. When the execution of function reaches to return directive, the function stops, the value is returned to the calling code. It is possible to use return without a value. That causes the function to exit immediately.

// return; === return undefined;

function sum(a,b){
    // return a+b;
    return
    // this line of code won't execute. JavaScript assumes a semicolon after return.
    console.log('hello world');
}
const result = sum(5,5);
// console.log(result); // 10

// topic: Naming a function
/**
 * - a name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
 * - a function is an action, so function names are usually verbal.
 * - there exist many well-known function prefixes like create..., get..., show... etc.
 */













// topic: Purposes of functions
/**
 * - avoid code duplication
 */
