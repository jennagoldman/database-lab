const { getCaster } = require('./types');

class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }
  validate(object) {
    if(!(this.field in object) && this.configuration.required) {
      throw `this object does not have a  ${this.field} property`;
    } else if(!(this.field in object) && !this.configuration.required) {
      return null;
    }
  }
}

module.exports = { Validator };
