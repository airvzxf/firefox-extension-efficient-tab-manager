// Violation 1: Missing semicolon (ESLint rule violation)
const x = 5
// Violation 2: Unused variable (ESLint rule violation)
let unusedVariable = 'test'; 

function calculate(a, b) {
    return a + b;
}

console.log(calculate); // Error: Function reference (Not an attempt to call it)