const twoSum = require('./two_sum');

test('expect twoSum([2, 7, 11, 15], 9) to return [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('expect twoSum([], 5) to retun null', () => {
  expect(twoSum([], 5)).toBe(null);
});

