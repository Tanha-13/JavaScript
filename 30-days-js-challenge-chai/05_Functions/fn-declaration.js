// problem: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(number){
    if(number % 2 === 0){
        return `${number} is a even number`;
    }
    else{
        return `${number} is a odd number`;

    }
}
const result = checkEvenOrOdd(4);
console.log(result);

// problem:  Write a function to calculate the square of a number and return the result.
function calculateSquare(num){
    return num*num;
}
const output = calculateSquare(5);
console.log(output);