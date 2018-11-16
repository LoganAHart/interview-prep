const { checkPermutation } = require('./index')

test(`checkPermutation('bcgdefa', 'abcdefg')`, () => {
  expect(checkPermutation('bcgdefa', 'abcdefg')).toEqual(true)
})

test(`checkPermutation('abcdefg', 'abcdefghi')`, () => {
  expect(checkPermutation('abcdefg', 'abcdefghi')).toEqual(false)
})

test(`checkPermutation('abcdefg', 'gfedcbd')`, () => {
  expect(checkPermutation('abcdefg', 'gfedcbd')).toEqual(false)
})
