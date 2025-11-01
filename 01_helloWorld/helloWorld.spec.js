const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});

// require() imports the code from the javascript file (helloWorld.js) to test it.

// The next block (describe()) is the body of the test.
// test() function describes what should be happening in plain english and then includes the expect() function. For this simple example it should be pretty simple to read.

// run the tests by entering npm test helloWorld.spec.js in the terminal and watch it fail. The output from that command should tell you exactly what went wrong with your code. 
// In this case, running the helloWorld() function should return the phrase 'Hello, World!' but instead it returns an empty string...
