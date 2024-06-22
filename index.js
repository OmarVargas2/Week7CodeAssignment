/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
c. Use a loop to iterate through the array and calculate the average age.
*/


let ages = [3, 9, 23, 64, 2, 8, 28, 93] 
var subsAges = ages[ages.length-1] - ages[0]


console.log(subsAges);

ages.push(50);
var subsAges = ages[ages.length-1] - ages[0]

console.log(ages[0]);
console.log(ages[ages.length-1]);

console.log(subsAges);

function average(array) {
    let sum = 0;
    for (let item of array){
        sum += item;
    }
    return sum / array.length
}
console.log(average(ages));





/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let namesLengths = [3, 5, 3, 5, 4, 3];



console.log(average(namesLengths));


console.log(names.join(' '))  





  


// 3. How do you access the last element of any array?

console.log(names[names.length-1]);

// 4. How do you access the first element of any array?

console.log(names[0]);

/* 
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */



let nameLengths = [3, 5, 3, 5, 4, 3];

for(nameNums of nameLengths){
    console.log(nameNums);
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let count = 0
for (let i = 0; i < nameLengths.length; i++){
    count += nameLengths[i]
} console.log(count);

/* 7. Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function blah (word, n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;

} console.log(blah('Hello', 3))

/* 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.*/

function fullName(firstName, lastName){
    return firstName + " " + lastName;
} console.log(fullName('Omar', 'Vargas'));

/* 9. Write a function that takes an array of numbers and 
returns true if the sum of all the numbers in the array is greater than 100.*/


let oneHundred = [5, 9, 15, 44, 59, 62];

function sum100(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum+= arr[i];
    } if (sum > 100) {
        return true;
    } else {
        return false;
    }
} console.log(sum100(oneHundred));

/* 10. Write a function that takes an array of numbers and 
returns the average of all the elements in the array. */

let avgArray = [3, 5, 10, 25, 33];
let sum = 0;
function averageArr(arr) {
    for (item of arr) {
        sum += item;
    }return sum / arr.length;

} console.log(averageArr(avgArray));

/* 11. Write a function that takes two arrays of numbers and returns true if the average 
of the elements in the first array is greater than the average of the elements in the second array. */

let array1 = [4, 7, 24, 55, 58];
let array2 = [2, 10, 15, 25, 65];
let sum3 = 0;
let sum4 = 0

function whichIsGreater(a, b) {
    for(i= 0; i < a.length; i++) {
        sum3 += a[i];
        sum3 / a.length;
    } for(j = 0; j < b.length; j++){
        sum4 += b[j];
        sum4 / b.length;
    }     
        if (sum3 / a.length > sum4 / b.length){
            return true;
        } else{
            return false;       
        }
    }  
console.log(whichIsGreater(array1, array2));

/* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

let outdoorTemp = true;;
let money = 11.00

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside === isHotOutside && moneyInPocket > 10.50){
        return true;
    }else {
        return false;
    }

}console.log(willBuyDrink(outdoorTemp, money));

/* 13. Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.*/

let dodgers = [5, 7, 8]
let redSox = [3, 6, 8]
let score1 = 0
let score2 = 0

function whoWins (team1, team2) {
    for (let i = 0; i < team1.length; i++){
        score1 += team1[i];
    }
    for (let j = 0; j < team2.length; j++){
        score2 += team2[j];

    }
        if (score1 > score2){
            return "Dodgers win!";
        } else if(score2 > score1){
            return "Red Sox win!";
        } else{
            return "Tie Game!!";
        }

}console.log(whoWins(dodgers, redSox));

//The function runs two arrays, adds them and compares them to see which array is higher or if it's the same.
//Result is "Dodgers win!"