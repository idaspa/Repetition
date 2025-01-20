// Task 1

let myNumbers = [2, 6, 7, 8];
let max = myNumbers[0];

function highestNumber(myNumbers) {
    for (let i = 0; i < myNumbers.length; i++)
        if (myNumbers[i] > max)
            max = myNumbers[i];
    return max;
};
console.log(highestNumber(myNumbers));

// Task 2


// Task 3


// Task 4

let randomNumbers = [1, 4, 6, 7, 8];

function sum(randomNumbers) {
    let sum = 0;
    for (let i = 0; i < randomNumbers.length; i++)
        sum += randomNumbers[i];
    return sum;
};
console.log(sum(randomNumbers));



//Task 5.


let stringToCount = [`Duck`, `You`, `You`, `Ducking`, `Duck`];



console.log(countWords(stringToCount));












;




/*  Task 6
    Create the functions that given a color value in hex format reutns the RGB and CMYK values .
    Do not use any built in functionality.

    Hex is defined as #RRGGBB. Where RR, GG and BB are two digit hexadecimal numbers.
    RGB is defined as three integers between 0 and 255.
    CMYK is defined as four floats between 0 and 1.

    The conversion from RGB to CMYK is defined as:
    K = 1 - max(R, G, B) / 255
    C = (1 - R / 255 - K) / (1 - K)
    M = (1 - G / 255 - K) / (1 - K)
    Y = (1 - B / 255 - K) / (1 - K)

    Tip: 
    - You can use int.Parse("FF", System.Globalization.NumberStyles.HexNumber) to convert a hex number to an integer.
    - You can read a substring from a string using str.Substring(startIndex, length)
    - You can return multiple values from a function by using {}.

*/



