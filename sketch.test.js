const sum = require('./sketch')

test('adds 1 + 2 to equal 3', SumTest)

function SumTest() {
  expect(sum(1, 2)).toBe(3)
}