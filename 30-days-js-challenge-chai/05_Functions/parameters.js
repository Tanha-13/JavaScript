// problem: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.
const showValues = (one, two = 5) => {
    return one * two;
}
const output = showValues(45);
console.log(output);

//problem: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const infoPerson = function(userName, userAge = 56){
    return `Hello ${userName}, Welcome to club. As you are ${userAge}, you can get unlimited services.`;
}
const result = infoPerson('John', 34);
console.log(result);