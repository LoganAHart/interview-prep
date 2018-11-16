const isUnique = (str) => {
  const storage = {}
  for (let i = 0; i < str.length; i++) {
    if (storage.hasOwnProperty(str[i])) {
      return false
    }
    storage[str[i]] = str[i]
  }
  return true
}

module.exports = { isUnique }
