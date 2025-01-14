/*
    NB! There is absolutely no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/* Task 1
    Declare two variables, set the value of the first variable to 1 and the value of the second to 2.
    Now swap so the first variable gets the value of the second and vice versa.
*/

let firstNumber = 1;
let secondNumber = 2;

console.log(firstNumber,secondNumber);
console.log(firstNumber+1, secondNumber-1);
//console.log(secondNumber,firstNumber);

/* Task 2
    Without using built-in Math functionality or constants in JavaScript.
    Calculate the area of a circle with the radius 6.
*/

let circleRadius = 6;
const PI  = 3.14; 
let area = PI * circleRadius * circleRadius;
console.log(area)



/* Task 3
    Given the two strings "If at first you do not succeed, try, try again" and "Fall seven times, stand up eight".
    Create a variable that contains all the letters that are in both strings but only once and in alphabetical order.
    Consider 'A' and 'a' the same letter.
*/
let firstString =  "If at first you do not succeed, try, try again";
let secondString = `fall seven times, stand up eight`;
let lettersFound = [];
let stringCombined = firstString + secondString;

/*for( let i = 0; i < stringCombined.length; i++);{
    if(!lettersFound.include
    }
/* Task 4
    Declare three variables. The first two should have the values 6 and 2.
    Make it so that the third variable is 10.
*/
let theFirstNumber = 6;
let theSecondNumber = 2;
let theThirdNumber = 10; 


/* Task 5
    Given a variable set to a random floating point value (you pick the value).
    Instantiate a second variable that is true if the first variable is greater than 22.34.
*/
let chosenNumber = 22.34;
let numberToCompare = 22.34;
let greaterThan  = false;

if(chosenNumber > numberToCompare);{
    greaterThan = true;
console.log(greaterThan);
}



/* Task 6
    Given the string  and the string "Life is short. Smile while you still have teeth.""The best therapy is a good laugh and great friends.".
    Create a new variable that is the intersection of words between the two strings.
    Create a new variable that is the union of words between the two strings.
*/

let oneString = $`{Life is short. Smile while you still have teeth,}` + $`{The best therapy is a good laugh and great friends}`;
let unionString = oneString;
console.log(unionString);