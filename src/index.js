const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  await fs.writeFile(fileName, fileContent);
  console.log(`file ${fileName} created successfully`);
};

const myFileReader = async (fileName) => {
  await fs.readFile(fileName);
  console.log(fileName);
};

const myFileUpdater = async (fileName, fileContent) => {
  await fs.appendFile(fileName, fileContent);
  console.log(`${fileName} is updated`);
};

const myFileDeleter = async (fileName) => {
  await fs.unlink(fileName);
  console.log(`${fileName} is deleted`);
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
