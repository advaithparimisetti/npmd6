const calculator = require('./calc'); 
const readline = require('readline'); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 
rl.question("Enter the first number (x): ", (xInput) => { 
    rl.question("Enter the second number (y): ", (yInput) => { 
        const x = parseFloat(xInput); 
        const y = parseFloat(yInput); 
 
        console.log("Addition of " + x + " and " + y + " is " + 
calculator.add(x, y)); 
        console.log("Subtraction of " + x + " and " + y + " is " + 
calculator.sub(x, y)); 
        console.log("Multiplication of " + x + " and " + y + " is " + 
calculator.mult(x, y)); 
        console.log("Division of " + x + " and " + y + " is " + 
calculator.div(x, y)); 
 
        rl.close(); 
    }); 
}); 