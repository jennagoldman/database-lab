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
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a number', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });

    it('properly tells if a value is a string', () => {
      expect(isString('hello')).toBeTruthy();
      expect(isString(1)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });

    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
      expect(isBoolean('')).toBeFalsy();
      expect(isBoolean(3)).toBeFalsy();
    });

    it('properly tells if a value is an array', () => {
      expect(isArray([1, 2, 3])).toBeTruthy();
      expect(isArray(['1', '2', '3', '4'])).toBeTruthy();
      expect(isArray([])).toBeTruthy();
      expect(isArray(3)).toBeFalsy();
      expect(isArray(true)).toBeFalsy();
      expect(isArray('array')).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(() => {})).toBeFalsy();
    });
  
    it('properly tells if a value is an object', () => {
      expect(isObject({ name: 'jenna' })).toBeTruthy();
      expect(isObject({ array: ['1', '2', '3', '4'] })).toBeTruthy();
      expect(isObject([1, 2, 3])).toBeFalsy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(3)).toBeFalsy();
      expect(isObject('object')).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
    });
  
    it('properly tells if a value is a function', () => {
      expect(isFunction(() => {})).toBeTruthy();
      expect(isObject(Math.random)).toBeTruthy();
      expect(isFunction('hello')).toBeFalsy();
      expect(isFunction(3)).toBeFalsy();
      expect(isFunction([1, 2, 3])).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });

    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString(true)).toEqual('true');
    });

    it('can cast values to a boolean', () => {
      expect(castToBoolean('true')).toEqual(true);
      expect(castToBoolean(1)).toEqual(true);
      expect(castToBoolean('')).toEqual(false);
      expect(castToBoolean(0)).toEqual(false);
      expect(castToBoolean(null)).toEqual(false);
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });

    it('can get the right caster', () => {
      expect(getCaster(Number)).toEqual(castToNumber);
      expect(getCaster(String)).toEqual(castToString);
      expect(getCaster(Boolean)).toEqual(castToBoolean);
      expect(getCaster(Promise)).toBeNull();
    });
  });
});
