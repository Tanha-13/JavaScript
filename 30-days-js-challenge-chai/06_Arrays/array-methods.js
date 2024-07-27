// problem: Use the `push` method to add a new number to the end of the array and log the updated array.
const arr1 = [1,2,3,4,5];
arr1.push(6);
// console.log(arr1); // [1,2,3,4,5,6]

//problem: Use the `pop` method to remove the last element from the array and log the updated array.
const arr2 = [1,2,3,4,5,6];
arr2.pop();
// console.log(arr2); //[1,2,3,4,5]

//problem: Use the `shift` method to remove the first element from the array and log the updated array.
const arr3 = [1,2,3,4,5];
arr3.shift();
// console.log(arr3); //[2,3,4,5]

//problem: Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
arr3.unshift(1);
// console.log(arr3); // [1,2,3,4,5]

// problem: Use the `map` method to create a new array where each number is doubled and log the new array.
const array1 = [1,2,3,4,5,6,7,8,9,10];
const mapArray = array1.map(item => item*2);
// console.log(mapArray); // [2,4,6,8,10,12,14,16,18,20]

// problem: Use the `filter` method to create a new array with only even numbers and log the new array.
const array2 = [1,2,3,4,5,6,7,8,9,10];
const filterArray = array2.filter(element => element%2 === 0);
console.log('The even numbers array is: ', filterArray); //The even numbers array is:  [ 2, 4, 6, 8, 10 ]


// problem: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
const array3 = [1,2,3,4,5,6,7,8,9,10];
const sum = array3.reduce((accumulator, element) => accumulator+element, 0);
console.log(sum); // 55

