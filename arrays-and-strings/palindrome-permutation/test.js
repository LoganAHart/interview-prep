const { palindromePermutation } = require('./index')

test(`palindromePermutation('code')`, () => {
  expect(palindromePermutation('code')).toEqual(false)
})

test(`palindromePermutation('aab')`, () => {
  expect(palindromePermutation('aab')).toEqual(true)
})

test(`palindromePermutation('carerac')`, () => {
  expect(palindromePermutation('carerac')).toEqual(true)
})

test(`palindromePermutation('')`, () => {
  expect(palindromePermutation('')).toEqual(true)
})
