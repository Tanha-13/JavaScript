// problem-01: Write a JavaScript program to display the current day and time in the following format.
/*  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const date = new Date();

// get today's day number. It starts from 0 which is Sunday
const currentDay = date.getDay();

// array of days
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is : ${dayArr[currentDay]}`);

const currentTime = date.toLocaleTimeString();
console.log(`Current Time is : ${currentTime}`);