const checkPerm = (sPerm, bSub) => {
  const chars = bSub.split('')
  const bPerm = {}
  chars.forEach(c => {
    if (!bPerm[c]) {
      bPerm[c] = 1
    } else {
      bPerm[c] += 1
    }
  })
  for (let k in sPerm) {
    if (sPerm[k] !== bPerm[k]) {
      return false
    }
  }
  return true
}

const subStringPermutations = (s, b) => {
  const sChars = {}
  let combos = 0
  s.split('').forEach(c => {
    if (!sChars[c]) {
      sChars[c] = 1
    } else {
      sChars[c] += 1
    }
  })
  for (let i = 0; i < b.length; i++) {
    let sub = b.substring(i, i + s.length)
    if (checkPerm(sChars, sub)) {
      combos += 1
    }
  }
  return combos
}

module.exports = { subStringPermutations }
