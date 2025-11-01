const addNumbers = require('./addNumbers')

describe('addNumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});

// npm test javascript-exercises/02_addNumbers/addNumbers.spec.js
