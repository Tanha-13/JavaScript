// problem: create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator

const numberValue = 34;
const strValue = 'Welcome';
const logicValue = false;
const obj = {
    courseName: '30 days Javascript challenge',
    courseDuration: 30,
}
const arr = [3,23,53,63];
console.log(typeof numberValue); //number
console.log(typeof strValue); // string
console.log(typeof logicValue); // boolean
console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(Array.isArray(arr));  // true