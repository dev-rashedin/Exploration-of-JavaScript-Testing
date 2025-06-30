const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
})