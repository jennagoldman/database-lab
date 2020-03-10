const { Validator } = require('./Validator');

describe('Validator class', () => {
  it('can validate data', () => {
    const nameValidator = new Validator('name', {
      type: String,
      required: true
    });

    const cat = {
      name: 'Loki',
      age: 4,
      weight: '11 lbs'
    };

    nameValidator.validate(cat);
  });
});
