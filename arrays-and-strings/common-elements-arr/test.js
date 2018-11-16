const { commonElements } = require('./index')

test(`commonElements([13, 27, 35, 40, 49, 55, 59], [17, 35, 39, 40, 55, 58, 60])`, () => {
  expect(commonElements([13, 27, 35, 40, 49, 55, 59], [17, 35, 39, 40, 55, 58, 60])).toEqual(3)
})
