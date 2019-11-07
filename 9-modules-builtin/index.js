const fs = require('fs');
const path = require('path');

const givenPath = path.join(process.argv[2]);

function createHello() {
  const filePath = path.join(givenPath, 'hello.txt');

  if (fs.existsSync(filePath)) {
    console.log(`There is already a "hello.txt" in ${givenPath}. Exiting.`);
  }

  fs.writeFileSync(filePath, ':)');
}

function main() {
  if (!givenPath) {
    console.log('You did not specify a path! Exiting.');
    return;
  }

  if (!fs.existsSync(givenPath)) {
    console.log(`The specified path ${givenPath} does not exist. Exiting.`);
    return;
  }

  createHello();
}

main();
