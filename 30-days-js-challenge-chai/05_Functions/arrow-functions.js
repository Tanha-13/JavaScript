// problem: Write an arrow function to calculate the sum of two numbers and return the result.
const sumTwoNumber = (num1, num2) => num1+num2;
const result = sumTwoNumber(3,4);
console.log(result);

// problem: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkSting = (str) => {
    if(str.includes('love')){
        return true;
    }
    return false;
}

const output = checkSting('I hate you');
console.log(output);
