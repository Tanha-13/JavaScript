// problem:  Write a higher-order function that takes a function and a number, and called the function that many times.

function callFunction(callBack, num){
    let result = "";
    for(let i= 1; i<=num;i++){
        result += callBack();
        if(i !== num){
            result += '\n';
        }
    }
    return result;
}

function callBackFunction(){
    return ('Hello World!!');
}

const output = callFunction(callBackFunction,5);
console.log(output);


// problem: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const showFunction = (function1, function2, value) => {
    const tempValue = function1(value);
    return function2(tempValue);

}

function double(num){
    return num * 2;
}

function add(num){
    return num + 5;
}

const result = showFunction(double,add, 5);
console.log(result);

