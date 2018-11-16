const { stringCompression } = require('./index')

test(`stringCompression('aabcccccaaa')`, () => {
  expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3')
})

test(`stringCompression('abcdefgh')`, () => {
  expect(stringCompression('abcdefgh')).toEqual('abcdefgh')
})
