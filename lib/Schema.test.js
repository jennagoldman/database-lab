const { Schema } = require('./Schema');

describe('Schema class', () => {
  it('can validate and cast an entire object', () => {
    const catSchema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String,
        required: false
      }
    });

    const cat = {
      name: 'Loki',
      age: 4,
      weight: '11 lbs'
    };

    expect(catSchema.validate(cat)).toEqual({ 
      name: 'Loki', 
      age: 4, 
      weight: '11 lbs'
    });
  });

  it('can error on missing required field', () => {
    const catSchema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String,
        required: false
      }
    });

    const noNameCat = {
      age: 10,
      weight: '12 lbs'
    };

    expect(() => catSchema.validate(noNameCat)).toThrowError('Error validating due to the following errors: Object does not have name');
  });
});
