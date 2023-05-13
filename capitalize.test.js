const capitalize = require('./capitalize');

test('capitalize the string', () => {
  expect(capitalize('iqbal')).toBe('Iqbal');
});
