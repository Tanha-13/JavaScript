//problem: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// const number = 45;
// const number = 0;
const number = -45;

//solution 01
if(number > 0){
    console.log(`${number} is a positive number`);
}
else{
    console.log(`${number} is a negative number`);
}

//solution 02
if(number > 0){
    console.log(`${number} is a positive number`);
}
else if(number === 0){
    console.log(`${number} is zero`);
}
else{
    console.log(`${number} is a negative number`);
}

// solution 03
if(number >=0){
    if(number >0){
        console.log(`${number} is a positive number`);
    }
    else{
        console.log(`${number} is zero`);
    }
}
else{
    console.log(`${number} is a negative number`);
}


// problem: Write a program to check if a person is eligible to vote(age>=18) and log the result to the console.

// const personAge = 67;
// const personAge = 18;
const personAge = 15;
if(personAge >= 18){
    console.log(`The person is eligible to vote`);
}
else{
    console.log(`The person is not eligible to vote`);
}