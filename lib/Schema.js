const { Validator } = require('./Validator');

class Schema {
  constructor(schemaDefinition) {
    this.validators = Object.entries(schemaDefinition).map(entry => new Validator(entry[0], entry[1]));
  }

  validate(object){
    const errors = [];
    this.validators.forEach(validator => {
      if(!object[validator.field] && validator.configuration.required) {
        errors.push(`Object does not have ${validator.field}`);
      }
    });
    const newObject = Object.entries(object).reduce((acc, curr) => {
      try {
        const validator = this.validators.find(validator => validator.field === curr[0]);
        acc[curr[0]] = validator.validate(object);
      }
      catch(error) {
        errors.push(error);
      }
      return acc;
    }, {});
    if(errors.length > 0) {
      throw ('Error validating');
    }
    return newObject;
  }
}

module.exports = { Schema };
