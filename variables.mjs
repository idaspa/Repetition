
/* Task 1
*/
let firstNumber = 1;
let secondNumber = 2;

console.log(firstNumber, secondNumber);
console.log(firstNumber + 1, secondNumber - 1);
console.log(secondNumber,firstNumber);

/* Task 2
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
firstString.sort(firstString)
    
console.log(firstString)
/*for (let i = 0; i < bothStrings.length; i++) {
    lettersFound.push(secondString[i])
    
*/
//console.log(sortedString)




/* Task 4 
*/

let theFirstNumber = 6;
let theSecondNumber = 2;
let theThirdNumber = 10;

/* Task 5
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

let oneString = `Life is short. Smile while you still have teeth.` + `The best therapy is a good laugh and great friends.`;
console.log(oneString);

let stringNumberOne = `Life is short. Smile while you still have teeth.`;
let stringNumberTwo = ` The best therapy is a good laugh and great friends.`;
let combinedString = stringNumberOne + stringNumberTwo;
console.log(combinedString)
