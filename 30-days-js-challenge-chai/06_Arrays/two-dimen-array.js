// problem: Create a two-dimensional array(matrix) and log the entire array to the console.

let array = [];
let row = 3;
let column = 3;
let value = 1;

for(let i = 0; i < row; i++){
    array[i] = [];
    for(let j = 0; j < column; j++){
        array[i][j] = value++;
    }
}
console.log(array);

// problem: Access and log a specific element from the two-dimensional array.
// accessing all elements of a 2D array
// array.forEach(row => {
//     row.forEach(value => console.log(value))
// })

// accessing any specific elements: array[i][j]
console.log(array[2][2]); // 9
console.log(array[3][3]); // error: TypeError: Cannot read properties of undefined.