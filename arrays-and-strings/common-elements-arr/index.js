const commonElements = (arrA, arrB) => {
  let common = 0
  let lastIdx = 0
  for (let i = 0; i < arrA.length; i++) {
    let valA = arrA[i]
    for (let j = lastIdx; j < arrB.length; j++) {
      if (arrB[j] === valA) {
        common += 1
        lastIdx = j
        break
      } else if (arrB[j] > valA) {
        break
      }
    }
  }
  return common
}

module.exports = { commonElements }
