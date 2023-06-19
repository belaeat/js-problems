/*
-----------------------------------
            Problem One
-----------------------------------
*/

/* In this code we are getting an input parameter called "positiveNumber" and also declared a variable "result" which calculate the input and return result. */

function mindGame(number) {
    if (typeof number !== 'number') {
        return new Error('Please provide a number.');
    }
    else {
        const result = (number * 3 + 10) / 2 - 5;
        return result;
    }
}

mindGame(number); // Here we will take a number as an input.

/*
-----------------------------------
            Problem Two
-----------------------------------
*/

/* In this code we are taking an input (string type) and counting the string length and then calculating the remainder of that string and returning 'Even' or 'Odd' based on the remainder. If the remainder is 0 then it's returning 'Even' and if it's remainder is not eqal to 0 then it is returning 'Odd' */


function evenOdd(str) {
    const stringCount = str.length;
    if (typeof str === 'string' && stringCount % 2 == 0) {
        return 'Even';
    }
    else if (typeof str === 'string' && stringCount % 2 !== 0) {
        return 'Odd';
    }
    return 'Please provide a string';
}

evenOdd(str); // Here we will take a string type variable as an input


/*
-----------------------------------
            Problem Three
-----------------------------------
*/


/* Is this code, we are taking a number as an input and checking the difference between the number and 7. And if the difference is lest than 7 then returning the difference as it is. And if it is equal or greater than 7 then returning the difference multiplying by 2. And also returning an error message is the input is not numeric variable.
 */


function isLGSeven(num) {
    const difference = num - 7;

    if (typeof num === 'number' && difference < 7) {
        return difference;
    }
    else if (typeof num === 'number' && difference >= 7) {
        return num * 2;
    }
    else {
        return Error('Please input a number.');
    }
}
isLGSeven(num); // Here we take a number as an input.


/*
-----------------------------------
            Problem Four
-----------------------------------
*/


/* In this code we are taking an array of numbers as input and if the array elements are not numbers than returning an error. And if the array elements are numbers then checking if the numbers are less than 0, if we find any number which is less than 0 then increasing the count.  
 */


function findingBadData(numArray) {
    let count = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (typeof numArray[i] !== "number") {
            return new Error("Put numbers as array elements.");
        }
        if (numArray[i] < 0) {
            count++;
        }
    }

    return count;
}

findingBadData(numArray); // Here we are taking array of numbers as input.



/*
-----------------------------------
            Problem Five
-----------------------------------
*/

/* In this code, we are taking input from three friends and converting thier gems to diamond converting power and calculating total diamond. This 'gemsToDiamond' funtion has 3 parameters for taking 3 input.
 */

function gemsToDiamond(friend1, friend2, friend3) {
    totalDiamond = friend1 * 21 + friend2 * 32 + friend3 * 43;
    if(totalDiamond > 1000*2){
        return totalDiamond-2000;
    }
    else{
        return totalDiamond;
    }
}

gemsToDiamond(friend1, friend2, friend3); // Here we take the gems number from each friend.


