/**
 * Write a program to print a pattern using nested for loops.
```
*
* *
* * *
* * * *
* * * * *
```
 */
const row = 5;
let result = "";

for (let i = 1; i <= row; i++) {
    for( let j = 1; j <= i; j++){
        result += `* `;

    }
    if(i !== row){
        result += `\n`;
    }
}
console.log(result);