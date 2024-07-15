// const inquirer = require("@inquirer");
import { log } from "console";
import inquirer from "inquirer";
//1. Loop through an array with for-of:

//Create an array of your favorite movies. Write a function that uses a for-of loop to print
//each movie to the console.

let movies: string[] = ["Inception", "Interstellar", "Terminator", "The Dark Knight"];

function printMovies (movies: string[]) {
    for (let movie of movies) {
        console.log(movie);
    }
};
printMovies(movies);

//2. Enumerate Properties with For-In loop

//Given an object representing a car with properties like make, model, and year, write a function that
//uses a for-in loop to print each property name and its value.

let car = {
    make: "Toyota",
    model: "camry",
    year: 2023,
    color: "black"
};

function carDetials (car: { [key: string]: string | number }) {
    for (let key in car) {
            console.log(`${key}: ${car[key]}`); 
    }
};
carDetials(car);

//Basic for loop excercise:

//Write a function that uses a for loop to print the numbers from 1 to 100. However, for numbers
//divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
//print "Buzz". For numbers divisible by both 3 and 5, print "FizzBuzz".

function printNumbers () {
    for (let i = 0; i <= 100; i++) {
        let output = '';
        if(i % 3 === 0) output += "Fizz";
        if(i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }
}

printNumbers();

//4.Practicing Do-While loop:

//Create a function that simulates a simple guessing game. This function should generate a random number
//between 1 and 10 and then prompt the user to guess the number. use a do-While loop to keep asking them to
//guess again until they get it right. 


async function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
  
    let correctGuess = false;
    while (!correctGuess) {
      const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "input",
        message: "Guess the number between 1 to 10.",
        validate: function (value) {
          const number = parseInt(value, 10);
          if (number >= 1 && number <= 10) {
            return true;
          }
          return "Please enter a number between 1 and 10.";
        }
      }]);
  
      const userGuessNumber = parseInt(answer.userGuessNumber, 10);
      if (userGuessNumber === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        correctGuess = true;
      } else {
        console.log("Try again!");
      }
    }
  }
  
  guessNumberGame();
  
//5. While loop for a countdown:

//Write a function that takes a number as an argument and counts down to zero using a while loop,
//Printing each number to the console.

function countdown(number: number) {

    let count = number;

    while (count >= 0) {
        console.log(count);
        count--;
    }
}

countdown(5);

//6. Enums for the day of the week

//Define an enum for the day of the week. Write a function that takes a day as an argument and returns
//"Weekend" if it's saturday or sunday, and "weekday" for other days.

enum Days {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
};

function process (Days: string) {
    if (Days === "saturday" || Days === "sunday") {
        console.log("Weekend !");
    } else {
        console.log("Weekdays");
    }
};
process("monday");

//Tuples for rgb colors:

//Define a tuple type for rgb color values. Write a function that takes an rgb tuple as an argument 
//and return a string describing the color.

type RGBTuple = [number, number, number];

function describeColor(rgb: RGBTuple): string {
    const [red, green, blue] = rgb;

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        throw new Error('Invalid RGB values. Values must be between 0 and 255.');
    }

    return `RGB(${red}, ${green}, ${blue})`;
}

const colorTuple: RGBTuple = [254, 128, 0];
const colorDescription = describeColor(colorTuple);
console.log(colorDescription);