const cal = require('./calculator');
const calc = new cal();

describe('calculator', () => {
  test('add', () => {
    expect(calc.add(5, 3)).toBe(8);
  });
  test('mul', () => {
    expect(calc.mul(5, 3)).toBe(15);
  });
  test('sub', () => {
    expect(calc.sub(5, 3)).toBe(2);
  });
  test('div', () => {
    expect(calc.div(15, 5)).toBe(3);
  });
});
