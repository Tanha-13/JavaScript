//problem: Write a program to check if a year is a leap year using multiple conditions (divided by 4, but not 100 unless also divided by 400) and log the result to the console.

const year = 2004;
if(year % 4 === 0){
    if(year%100 !== 0){
        console.log(`The ${year} is a leap year`);
    }
}
else if(year%400 === 0){
    console.log(`The ${year} is a leap year`);
}
else{
    console.log(`The ${year} is not a leap year`);
}


// solution 2
if((year%4===0 && year%100 !== 0) || year%400 === 0){
    console.log(`The ${year} is a leap year`);
}
else{
    console.log(`The ${year} is not a leap year`);
}