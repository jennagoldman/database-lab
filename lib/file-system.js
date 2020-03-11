const fs = require('fs');

function writeJSON(path, object) {
  return fs.writeFile(path, JSON.stringify(object));
}
