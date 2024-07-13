// problem: try reassigning a variable declared with const and observe the error.

const fixedValue = 'Chai aur code';
fixedValue = 'Hitesh';
console.log(fixedValue); //error: TypeError: Assignment to constant variable.

// While declaring a variable using const keyword, that variable cannot be redeclared and reassigned