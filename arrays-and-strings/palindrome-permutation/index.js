const palindromePermutation = (str) => {
  const hash = {}
  let odds = 0
  for (let i = 0; i < str.length; i++) {
    if (!hash.hasOwnProperty(str[i])) {
      hash[str[i]] = 1
    } else {
      hash[str[i]] += 1
    }
  }
  for (let k in hash) {
    if (hash[k] % 2 !== 0) {
      odds += 1
    }
  }
  return odds < 2
}

module.exports = { palindromePermutation }
