//Akshay Saini

//hoisting in javascript is a concept by which any variable and function can be accessed without any error before initialization.

//trying to access getName() and x before initialized them.
//getName(); //Hello World!
//console.log(x); //undefined
//console.log(getName); //f getName() {console.log("Hello World!")}

var x = 7;
function getName(){
    console.log("Hello World!");
}
getName(); //Hello World!
console.log(x); //7
console.log(getName);

// before executing, memory is allocated to each and every variable and function in javascript in memory creation phase. 