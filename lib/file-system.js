const fs = require('fs').promises;

const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, object) => {
  return fs.writeFile(path, JSON.stringify(object));
};

const readJSON = path => {
  return fs.readFile(path)
    .then(contents => JSON.parse(contents));
};

const readDirectoryJSON = path => {
  return fs.readdir(path)
    .then(files => {
      return Promise.all(files.map(file => readJSON(`${path}/${file}`)));
    });
};

module.exports = { 
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON
};
