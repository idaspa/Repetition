
/* Task 1
    Declare two variables, set the value of the first variable to 1 and the value of the second to 2.
    Now swap so the first variable gets the value of the second and vice versa.
*/

let firstNumber = 1;
let secondNumber = 2;

console.log(firstNumber, secondNumber);
console.log(firstNumber + 1, secondNumber - 1);
//console.log(secondNumber,firstNumber);

/* Task 2
    Without using built-in Math functionality or constants in JavaScript.
    Calculate the area of a circle with the radius 6.
*/

let circleRadius = 6;
const PI = 3.14;
let area = PI * circleRadius * circleRadius;
console.log(area)

/* Task 3
    Given the two strings "If at first you do not succeed, try, try again" and "Fall seven times, stand up eight".
    Create a variable that contains all the letters that are in both strings but only once and in alphabetical order.
    Consider 'A' and 'a' the same letter.
*/

let firstString = [`if at first  you do not succeed, try, try again fall seven times stand up eight`];
firstString.sort(``)
let CorrectOrder = 


    
console.log(firstString)
/*for (let i = 0; i < bothStrings.length; i++) {
    lettersFound.push(secondString[i])
    
*/
//console.log(sortedString)




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

let numberToCompare = 22.34;
let numberToCheck = 22.3;
let greaterThan = false;

if (numberToCompare < numberToCheck); {
    greaterThan = true;
    console.log(greaterThan);
};

/* Task 6
    Given the string  and the string "Life is short. Smile while you still have teeth.""The best therapy is a good laugh and great friends.".
    Create a new variable that is the intersection of words between the two strings.
    Create a new variable that is the union of words between the two strings.
*/

let oneString = `Life is short. Smile while you still have teeth. ` + `The best therapy is a good laugh and great friends.`;
console.log(oneString);

let stringNumberOne = `Life is short. Smile while you still have teeth.`;
let stringNumberTwo = ` The best therapy is a good laugh and great friends.`;
let combinedString = stringNumberOne + stringNumberTwo;
console.log(combinedString)
