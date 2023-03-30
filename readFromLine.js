let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    // output: null // it will neither question nor take input and prints whatever in the console.
})
// console.log(readline)// an object, use before and after creating Interface

/*
readline.question():

A statement or query to write to output, prepended to the prompt.


The rl.question() method displays the query by writing it to the output, 
waits for user input to be provided on input, 
then invokes the callbackfunction passing the provided input as the first argument.

When called, rl.question() will resume the input stream if it has been paused.
*/
readline.question('Please enter your name:', (name) => {
    console.log(`Hello ${name}`)
    readline.close()// to close the readLine() interface, otherwise you will keep on writing
})