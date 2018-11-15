const { subStringPermutations } = require('./index')

test(`subStringPermutations('abbc', 'cbabadcbbabbcbabaabccbabc')`, () => {
  expect(subStringPermutations('abbc', 'cbabadcbbabbcbabaabccbabc')).toEqual(7)
})
