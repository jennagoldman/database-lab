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

    const numberTwoCat = {
      name: 2,
      age: 2,
      weight: '2 lbs'
    };

    expect(nameValidatorRequired.field).toEqual('name');
    expect(nameValidatorRequired.configuration).toEqual({
      type: String,
      required: true
    });
    expect(nameValidatorNotRequired.field).toEqual('name');
    expect(nameValidatorNotRequired.configuration).toEqual({
      type: String,
      required: false
    });




    expect(nameValidatorRequired.validate(cat)).toEqual('Loki');
    expect(nameValidatorNotRequired.validate(cat)).toEqual('Loki');
    expect(() => nameValidatorRequired.validate(noNameCat)).toThrowError('this object does not have a name property');
    expect(nameValidatorNotRequired.validate(noNameCat)).toEqual(null);
    expect(nameValidatorRequired.validate(numberTwoCat)).toEqual('2');
    expect(nameValidatorNotRequired.validate(numberTwoCat)).toEqual('2');
  });
});
