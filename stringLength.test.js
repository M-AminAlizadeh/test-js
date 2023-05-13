const str_len = require('./string_length');

test('return the length of string', () => {
  expect(str_len('amin')).toBe(4);
});
test('return the length of string', () => {
  expect(() => str_len('')).toThrow(Error);
});
test('return the length of string', () => {
  expect(() => str_len('jasdflwkerlq')).toThrow(Error);
});
