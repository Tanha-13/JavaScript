// behind the scene, it invoked as a object
//todo: call vs invoke in programming
const name = 'nusrat';
const repoCount = 50;
// console.log(name + repoCount + " Value");

//string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration using String constructor
const gameName = new String('Survivor');
// console.log(gameName); //output: String {'survivor'}, 0: "S", 1: "u", 2: "r", 3: "v", 4: "i", 5: "v", 6: "o", 7: "r"

// console.log(gameName[0]); //value access. String values are immutable.
//console.log(gameName.__proto__); // in node environment, the output is {}.
//console.log(gameName.length); //output: 8. length property.
// console.log(gameName.toUpperCase()); //SURVIVOR
console.log(gameName.charAt(4)); //i
//console.log(gameName.indexOf('S')); //0
//console.log(gameName.indexOf('e')); //-1. that means the char is not included in gameName.
const newString = gameName.substring(0,4);
//console.log(newString); //Surv
const anotherString = gameName.slice(-8,4);
//console.log(anotherString); //

const newStringOne = "   nusrat    ";
console.log(newStringOne); //output:    nusrat    
console.log(newStringOne.trim()); //output: nusrat

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); //https://hitesh.com/hitesh-choudhary
console.log(url.includes('shundar')); //false
console.log(url.split('/'));
 