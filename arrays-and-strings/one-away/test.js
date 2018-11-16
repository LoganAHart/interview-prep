const { oneAway } = require('./index')

test(`oneAway('pale', 'ple')`, () => {
  expect(oneAway('pale', 'ple')).toEqual(true)
})

test(`oneAway('pales', 'pale')`, () => {
  expect(oneAway('pales', 'pale')).toEqual(true)
})

test(`oneAway('pale', 'bale')`, () => {
  expect(oneAway('pale', 'bale')).toEqual(true)
})

test(`oneAway('pale', 'bake')`, () => {
  expect(oneAway('pale', 'bake')).toEqual(false)
})

test(`oneAway('pale', 'baking pie')`, () => {
  expect(oneAway('pale', 'baking pie')).toEqual(false)
})
