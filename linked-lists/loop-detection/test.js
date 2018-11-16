const { func } = require('./index')

test('func(args)', () => {
  expect(func('args')).toEqual('answer')
})
