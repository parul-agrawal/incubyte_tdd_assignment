const Calculator = require('../src/calculator');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    const calculator = new Calculator();
    expect(calculator.add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2')).toBe(3);
  });
    
});
