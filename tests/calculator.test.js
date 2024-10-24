const Calculator = require('../src/calculator');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toBe(0);
  });
});
