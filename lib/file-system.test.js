const fs = require('fs').promises;
const { 
  mkdirp,
  writeJSON 
} = require('./file-system');

describe('file system test', () => {
  it('can create a directory and all parent directories', () => {
    return mkdirp('./my/cool/directory/path')
      .then(() => fs.stat('./my/cool/directory/path'))
      .then(stat => {
        expect(stat.isDirectory()).toBeTruthy();
      });
  });
});
