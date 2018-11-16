const { isUnique } = require('./index')

test(`isUnique('abcdefg')`, () => {
  expect(isUnique('abcdefg')).toEqual(true)
})

test(`isUnique('abcdaefg')`, () => {
  expect(isUnique('abcdaefg')).toEqual(false)
})

test(`isUnique('')`, () => {
  expect(isUnique('')).toEqual(true)
})
