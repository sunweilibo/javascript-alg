function euclideanAlgo(originA, originB) {
  const a = Math.abs(originA)
  const b = Math.abs(originB)

  return (b === 0) ? a : euclideanAlgo(b, a % b)
}

const res = euclideanAlgo(12, 3)
console.log("🚀 ~ file: euclideanAlgorithm.js ~ line 8 ~ re", res)