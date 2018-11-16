const stringCompression = (str) => {
  const arr = str.split('')
  let char = ''
  let idx = 0
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== char) {
      char = arr[i]
      idx = i
      count = 1
      arr[idx] = [char, count]
    } else if (arr[i] === char) {
      count++
      arr[idx][1] = count
    }
  }
  let baseChars = arr
    .filter(el => el.length > 1)
    .map(el => el.join(''))
    .join('')
  return baseChars.length < str.length ? baseChars : str
}

module.exports = { stringCompression }
