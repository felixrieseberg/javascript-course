const fs = require('fs');

// We use the period here to read the contents
// of the "current" folder
const contents = fs.readdirSync('.');

console.log(contents);
