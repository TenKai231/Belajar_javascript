// import { add } from './calculator.js';

// describe(`calculator`, () => {
//     it(`should add correctly`, () => {
        
//         // Arrange
//         const operandA = 1;
//         const operandB = 1;

//         // Action
//         const actualValue = add(operandA, operandB);

//         // Assert
//         const expectedValue = 2;
//         expect(actualValue).toBe(expectedValue);
//     });

//     it(`should throw an error if string passed on numA parameter`, () => {
//         const potentialErrorToBeThrew = () => {
//             // Arrange
//             const operandA = '5';
//             const operandB = 4;

//             // Action
//             add(operandA, operandB);
//         };
        
//         // Assert
//         expect(potentialErrorToBeThrew).toThrow(Error);
//     });

//     it(`should throw an error if string passed on numB parameter`, () => {
//         const potentialErrorToBeThrew = () => {
//             // Arrange
//             const operandA = 5;
//             const operandB = '4';
            
//             // Action
//             add(operandA, operandB);
//         };
        
//         // Assert
//         expect(potentialErrorToBeThrew).toThrow(Error);
//     });
// });


const { add } = require('./calculator.js');

describe('calculator', () => {
  test('should add correctly', () => {
    expect(add(1, 1)).toBe(2);
  });

  test('should throw error if string numA', () => {
    expect(() => add('5', 4)).toThrow(Error);
  });

  test('should throw error if string numB', () => {
    expect(() => add(5, '4')).toThrow(Error);
  });
});