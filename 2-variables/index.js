// This is a variable. The "let" instructs
// the engine to make a new variable, the "="
// that we want to assign a value to it.
let beep = '';

// We can also create the variable without
// giving it a value:
let boop;

// In both cases, we can later give it a
// different value:
beep = 'Hello';
boop = '';

// Sometimes, we want to create _constant_
// variables. Unlike the variables created
// above, they cannot change.
const beepBoop = 'Hello World';

// This is not allowed and will throw an error:
// beepBoop = 'Goodbye';

// Now that we have variables, we can use them
// instead of values:
console.log(beepBoop);