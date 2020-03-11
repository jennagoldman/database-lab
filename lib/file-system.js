const fs = require('fs').promises;

const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, object) => {
  return fs.writeFile(path, JSON.stringify(object));
};

const readJSON = (path) => {
  return fs.readFile(path)
    .then(data => JSON.parse(data));
};

module.exports = { 
  mkdirp,
  writeJSON,
  readJSON
};
