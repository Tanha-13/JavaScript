//problem: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
const date = new Date();
const currentDate = date.getDay();

switch (currentDate) {
  case 0:
    console.log("The day is Sunday");
    break;
  case 1:
    console.log("The day is Monday");
    break;
  case 2:
    console.log("The day is Tuesday");
    break;
  case 3:
    console.log("The day is Wednesday");
    break;
  case 4:
    console.log("The day is Thursday");
    break;
  case 5:
    console.log("The day is Friday");
    break;
  case 6:
    console.log("The day is Saturday");
    break;

  default:
    console.log("Invalid value");
    break;
}

//solution 02
const num = 22;
switch (num) {
  case 1:
    console.log("The day is Sunday");
    break;
  case 2:
    console.log("The day is Monday");
    break;
  case 3:
    console.log("The day is Tuesday");
    break;
  case 4:
    console.log("The day is Wednesday");
    break;
  case 5:
    console.log("The day is Thursday");
    break;
  case 6:
    console.log("The day is Friday");
    break;
  case 7:
    console.log("The day is Saturday");
    break;

  default:
    console.log('Invalid Input');
    break;
}

//problem:Write a program that uses a switch case to assign a grade("A","B","C","D","F") based on a score and log the grade to the console.
const yourScore = 89;
switch(true){
    case (yourScore >= 80):
        console.log(`You have got "A"`);
        break;
    case (yourScore >= 70):
        console.log(`You have got "B"`);
        break;
    case (yourScore >= 60):
        console.log(`You have got "C"`);
        break;
    case (yourScore >= 50):
        console.log(`You have got "D"`);
        break;
    case (yourScore >= 40):
        console.log(`You have got "E"`);
        break;
    case (yourScore < 40):
        console.log(`You have got "F"`);
        break;
    default:
        console.log('Invalid input');
        break;
}
