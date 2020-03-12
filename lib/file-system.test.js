const fs = require('fs').promises;
const { 
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON
} = require('./file-system');

describe('file system test', () => {
  it('can create a directory and all parent directories', () => {
    return mkdirp('./my/cool/directory/path')
      .then(() => fs.stat('./my/cool/directory/path'))
      .then(stat => {
        expect(stat.isDirectory()).toBeTruthy();
      });
  });

  it('can write an object to a file', () => {
    const cat = {
      name: 'Loki',
      age: 4,
      weight: '11 lbs'
    };

    return writeJSON('./my/cool/directory/path/cat', cat)
      .then(() => fs.readFile('./my/cool/directory/path/cat', { encoding: 'utf8' }))
      .then(contents => {
        expect(contents).toEqual('{"name":"Loki","age":4,"weight":"11 lbs"}');
      });
  });

  it('can read an object from a file', () => {
    return readJSON('./my/cool/directory/path/cat')
      .then(contents => {
        expect(contents).toEqual({ 'name': 'Loki', 'age': 4, 'weight': '11 lbs' });
      });
  });

  it('can read all files in a directory as objects', () => {
    return readDirectoryJSON('./my/cool/directory/path')
      .then(contents => {
        expect(contents).toEqual([
          { 'name': 'Loki', 'age': 4, 'weight': '11 lbs' },
          { 'name': 'Fozzie', 'age': 10, 'weight': '45 lbs' }
        ]);
      });
  });

  it('can update an object in a given path', () => {
    const cat = {
      name: 'Loki',
      age: 5,
      weight: '11 lbs'
    };

    return updateJSON('./my/cool/directory/path/cat', cat)
      .then(() => fs.readFile('./my/cool/directory/path/cat', { encoding: 'utf8' }))
      .then(contents => {
        expect(contents).toEqual('{"name":"Loki","age":5,"weight":"11 lbs"}');
      });
  });
});
