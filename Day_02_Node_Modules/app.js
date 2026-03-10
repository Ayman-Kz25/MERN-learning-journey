// import chalk from "chalk";

// const add = require("./math.js");
// const result = add(5, 10);
// console.log("Result:", result);

// const math = require("./math.js");
// console.log(math.add(10, 5));
// console.log(math.subtract(10, 5));

// console.log(chalk.green("Server started successfully!"));
// console.log(chalk.blue("Calculator running..."));
// console.log(chalk.red("Error! Error! Error!"));

// console.log(process.argv);
// const num1 = Number(process.argv[2]);
// const num2 = Number(process.argv[3]);

// console.log(num1+num2);


//Practice Tasks
//01. & 02.
let calc = require("./calculator.js");
// console.log(calc.add(10, 5));
// console.log(calc.subtract(10, 5));
// console.log(calc.multiply(10, 5));
// console.log(calc.divide(10, 5));

//03.
// console.log(chalk.blue("Calculator running..."));

// 04. 
// console.log(process.argv);
const func = String(process.argv[2]);
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// if(func === "add"){
//     console.log(calc.add(num1, num2));
// } else if(func === "subtract"){
//     console.log(calc.subtract(num1, num2));
// } else if(func === "multiply"){
//     console.log(calc.multiply(num1, num2));
// } else if(func === "divide"){
//     console.log(calc.divide(num1, num2));
// } else {
//     console.log("Invalid Command");
// }

const operations = {
    add: calc.add,
    subtract: calc.subtract,
    multiply: calc.multiply,
    divide: calc.divide,
}

if(operations[func]){
    console.log(operations[func](num1, num2));
} else {
    console.log("Invalid Command!");
}