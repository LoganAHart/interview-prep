const URLify = (str) => {
  const arr = str.split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== ' ') {
      break
    }
    arr.splice(i, 1)
  }
  const space = '%20'
  return arr.map(c => c === ' ' ? space : c).join('')
}

module.exports = { URLify }
