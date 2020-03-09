const isNumber = val => typeof val === 'number';

const isString = val => typeof val === 'string';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const castToString = val => {
  if(isString(val)) return val;
  const string = String(val);
  return string;
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}
  
const casters = {
  Number: castToNumber,
  String: castToString
};
  
const getCaster = Type => {  
  return casters[Type.name] || null;
};
  
module.exports = {
  isNumber,
  isString,
  castToNumber,
  castToString,
  CastError,
  getCaster
};
