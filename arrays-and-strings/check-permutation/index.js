const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  const chars1 = {}
  for (let i = 0; i < str1.length; i++) {
    if (!chars1.hasOwnProperty(str1[i])) {
      chars1[str1[i]] = 1
    } else {
      chars1[str1[i]] += 1
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (chars1.hasOwnProperty(str2[i])) {
      chars1[str2[i]] -= 1
    }
  }
  for (let k in chars1) {
    if (chars1[k] !== 0) {
      return false
    }
  }
  return true
}

module.exports = { checkPermutation }
