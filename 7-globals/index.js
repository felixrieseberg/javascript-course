// Take the input, cut off the first two ("node" and the name of the script).
// That leaves us with a simple array with everything that remains.
//
// [ '/Users/felixr/.nvm/versions/node/v10.11.0/bin/node',
//   '/Users/felixr/Code/js-course/8-globals/index.js',
//   'hello'
// ] => [ 'hello' ]
//
// Then, turn that into a string.
// [ 'hello' ] => 'hello'
const asString = process.argv.slice(2).toString()

// We now turn that string into an array where each character is an entry
// hello => [ 'h', 'e', 'l', 'l', 'o' ]
const asArray = asString.split('');

// We then reverse it
// [ 'h', 'e', 'l', 'l', 'o' ] => [ 'o' ,'l' ,'l' ,'e' ,'h' ]
const reversed = asArray.reverse();

// Turn that array back into a string
// [ 'o' ,'l' ,'l' ,'e' ,'h' ] => olleh
const joined = reversed.join('');

// Print to console
console.log(joined);
