const { Validator } = require('./Validator');

describe('Validator class', () => {
  it('can validate data', () => {
    const nameValidatorRequired = new Validator('name', {
      type: String,
      required: true
    });

    const nameValidatorNotRequired = new Validator('name', {
      type: String,
      required: false
    });

    const cat = {
      name: 'Loki',
      age: 4,
      weight: '11 lbs'
    };

    const noNameCat = {
      age: 10,
      weight: '12 lbs'
    };

    expect(nameValidatorRequired.validate(cat)).toEqual('Loki');
    expect(nameValidatorNotRequired.validate(noNameCat)).toEqual(null);
    expect(() => nameValidatorRequired.validate(noNameCat)).toThrowErrorMatchingSnapshot();
  });
});
