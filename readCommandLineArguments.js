// console.log(process)// an object
/*
In Node.js, the process object provides information about the current Node.js process,
 including information about the command line arguments that were passed when starting the process.

The argv property of the process object is an array that contains the complete set of command line arguments, 
including the path to the Node.js executable, the path to the script being executed, 
and any additional arguments passed to the script.
 */
let arguments = process.argv.slice(2)
// let greetings =  'Hello ${arguments[2]}'
// let greetings =  'Hello ${arguments[0]}'
let greetings = `Hello ${arguments.join(' ')}`
console.log(greetings)