//problem: Write a program to find the largest of three numbers using nested if-else statements and log the result to the console.

const num1 = 45;
const num2 = 98;
const num3 = 23;

if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is the largest number`);
}
else{
    console.log(`${num3} is the largest number`);
}

//solution 02
if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is the largest number`);
    }
}
else if(num2 > num3){
    console.log(`${num2} is the largest number`);
}
else{
    console.log(`${num3} is the largest number`);
}