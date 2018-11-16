const oneAway = (a, b) => {
  if (Math.abs(a.length - b.length) > 1) {
    return false
  }
  let edits = 0
  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    if (edits > 1) {
      return false
    }
    if (a[i] !== b[j]) {
      if (a.length > b.length) {
        i++
      } else if (b.length > a.length) {
        j++
      } else {
        i++
        j++
      }
      edits++
    } else {
      i++
      j++
    }
  }
  if (i < a.length || j < b.length) {
    edits++
  }
  return edits <= 1
}

module.exports = { oneAway }
