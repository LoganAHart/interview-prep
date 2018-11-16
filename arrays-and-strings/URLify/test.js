const { URLify } = require('./index')

test(`URLify('Mr John Smith   ')`, () => {
  expect(URLify('Mr John Smith   ')).toEqual('Mr%20John%20Smith')
})
