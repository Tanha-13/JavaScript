// problem: Write a program to print numbers from 1 to 5 using a do...while loop.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//problem: Write a program to calculate the factorial number using a do...while loop.

let num = 5;
let fac = 1;
let j = 1;
do{
    fac *= j;
    j++;
    
}while(j <= num);
console.log(fac);