const bsRecursive = (arr, key, low = 0, high = arr.length - 1) => {
  const mid = Math.floor((low + high) / 2)
  if (arr[mid] === key) {
    return mid
  } else if (low > high) {
    return -1
  } else if (arr[mid] > key) {
    return bsRecursive(arr, key, low, mid - 1)
  } else {
    return bsRecursive(arr, key, mid + 1, high)
  }
}

const bsIterative = (arr, key) => {
  let low = 0
  let high = arr.length - 1
  let mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (arr[mid] === key) {
      return mid
    } else if (arr[mid] > key) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

module.exports = {
  bsRecursive,
  bsIterative
}
