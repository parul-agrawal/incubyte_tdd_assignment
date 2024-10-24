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
  
  it('should return the sum of multiple numbers seprated by comma', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2,3,4')).toBe(10);
  });
  
  it('should handle new lines in addition to comma between numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });
  
  it('should support custom different delimiters', () => {
    const calculator = new Calculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should throw an error when negative numbers are present', () => {
    const calculator = new Calculator();
    expect(() => calculator.add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2,-4');
  });
  
});
