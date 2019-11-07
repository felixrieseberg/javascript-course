const fs = require('fs');
const path = require('path');

function getFilesToRun() {
  // First, get the path to the file we want to test
  const givenPath = process.argv[2];

  if (!givenPath) {
    console.log('You did not specify a path! Exiting.');
    process.exit();
  }

  // Parse it to allow both relative and absolute paths
  const normalizedPath = path.join(givenPath);

  if (!fs.existsSync(normalizedPath)) {
    console.log(`The specified path ${givenPath} does not exist. Exiting.`);
    process.exit();
  }

  // Is it a file? If so, return the single file in an array
  if (fs.lstatSync(normalizedPath).isFile()) {
    return [ normalizedPath ];
  }

  // If it's not a file, it's probably a folder. Let's read the folder
  // and assume that we're "running" every file in it
  const folderContents = fs.readdirSync(normalizedPath);

  // But! We don't want all contents - just files, not folders.
  const folderFiles = folderContents.filter((name) => {
    const filePath = path.join(normalizedPath, name);
    const isFile = fs.statSync(filePath).isFile();

    return isFile;
  });

  return folderFiles;
}

main();
