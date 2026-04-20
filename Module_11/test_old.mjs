import {test} from 'node:test';
import assert from 'assert';
import {add} from './calculator.js';

// test(`should add correctly`, () => {
//     const operatorA = 1;
//     const operatorB = 1;
    
//     const actialValues =  add(operatorA, operatorB);

//     const expectedValues = 2;
//     assert.equal(actialValues, expectedValues);
// });

// test(`shoudl thow an error when add non number`, () => {
//     const potentialErorr = () => {
//     const operatorA = 1;
//     const operatorB = '1';

//     // action
//     add(operatorA, operatorB);
//     };


//     // assert
//     assert.throws((potentialErorr), Error);
// });

test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});


// wa alos can use it for this case not just use test buat both same case
test('should throw an error if string passed on numB parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = 5;
    const operandB = '4';

    // Action
    add(operandA, operandB);
  };


    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
});
