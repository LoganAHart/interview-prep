const {
  bsRecursive,
  bsIterative
} = require('./index')

const testArr = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155]

test(`bsRecursive([10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155], 47)`, () => {
  expect(bsRecursive(testArr, 47)).toEqual(2)
})

test(`bsRecursive([10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155], 75)`, () => {
  expect(bsRecursive(testArr, 75)).toEqual(5)
})

test(`bsRecursive([10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155], 175)`, () => {
  expect(bsRecursive(testArr, 175)).toEqual(-1)
})

test(`bsIterative([10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155], 47)`, () => {
  expect(bsIterative(testArr, 47)).toEqual(2)
})

test(`bsIterative([10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155], 75)`, () => {
  expect(bsIterative(testArr, 75)).toEqual(5)
})

test(`bsIterative([10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155], 175)`, () => {
  expect(bsIterative(testArr, 175)).toEqual(-1)
})
