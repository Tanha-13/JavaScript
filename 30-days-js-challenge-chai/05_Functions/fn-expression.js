// problem: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMaxNumber = function(num1, num2){
    if(num1 >= num2){
        return `${num1} is the max number`;
    }
    else{
        return `${num2} is the max number`;

    }
}

const result = findMaxNumber(10,5);
console.log(result);

//problem: Write a function expression to concatenate two strings and return the result.

const concatenateString = function(str1 = '', str2){
    return `${str1} ${str2}`;
}

const output = concatenateString('hello', 'world');
console.log(output);