const rotateImage = (matrix) => {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) {
    return false
  }
  let n = matrix.length
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer
    let last = n - 1 - layer
    for (let i = first; i < last; i++) {
      let offset = i - first
      // save top
      let top = matrix[first][i]
      // first -> top
      matrix[first][i] = matrix[last - offset][first]
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset]
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last]
      // top -> right
      matrix[i][last] = top
      // right < - saved top
    }
  }
  return matrix
}

module.exports = { rotateImage }
