// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

const valueOne = 29;
const valueTwo = 69;

if (valueOne > 49 && valueOne < 100 || valueTwo > 49 && valueTwo <100) {
    console.log(true);
} else {
    console.log(false);
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

if (5 > 49 && 5 < 100 || 101 > 49 && 101 < 100 || 40 > 49 && 40 < 100) {
    console.log(true);
} else {
    console.log(false);
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

const a = 3;
const b = 16;
const c = 4;

if (a >= 10) {
    console.log(a + " is the largest value");
} else if (b >= 10) {
    console.log(b + " is the largest value");
} else if (c >= 10) {
    console.log(c + " is the largest value");
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

const givenString1 = "Pypypy";
const givenString2 = "thonthonthon";

if (givenString2.startsWith("Py")) {
    console.log(givenString2);
} else {
    const newString = "Py" + givenString2;
    console.log(newString);
}


//Alternate between givenString1 and givenString2 to clarify what is going on

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 

const integer1 = 60;
const integer2 = 5;

if (integer1 + integer2 > 49 && integer1 + integer2 < 81) {
    console.log(65);
} else {
    console.log(80);
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

const difference = 8;

if (5 + 5 === 8 || difference === 8) {
    console.log(true);
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

if (5 === 15 || 10 === 15 || 5 + 10 === 15) {
    console.log(true);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

const newInt1 = 21;
const newInt2 = 19;

// Too difficult :(


// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

const sum = newInt1 + newInt1;

if (newInt1 === newInt2) {
    console.log(sum * 3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

const diffFrom19 = 200; 

// this is wrong...

if (diffFrom19 > 19) {
    console.log(diffFrom19 * 2);
}


// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 

const firstName = "Mildred";
const age = 20;

if (age < 13) {
    console.log(firstName + " is a child");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young adult");
} else {
    console.log(firstName + " is an adult");
}
// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
