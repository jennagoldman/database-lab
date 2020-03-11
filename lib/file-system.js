const fs = require('fs').promises;

const mkdirp = path => {
  return fs.mkdir(path, { recursive: true })
    .then(() => console.log('done'));
};




// function writeJSON(path, object) {
//   return fs.writeFile(path, JSON.stringify(object));
// }

module.exports = { 
  mkdirp
};
