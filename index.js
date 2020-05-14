const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToNumber,
  castToString,
  castToBoolean,
  getCaster
} = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('3'));
console.log(isBoolean(3));
console.log(isArray([3]));
console.log(isObject({}));
console.log(isFunction(3));
console.log(castToNumber(3));
console.log(castToString(3));
console.log(castToBoolean(3));
console.log(getCaster(Number));
