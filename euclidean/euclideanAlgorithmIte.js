function euclideanAlgorithmIte(originA, originB) {
  const a = originA
  const b = originB

  while (a && b && a!==b) {
    [a,b] = a > b ? [a - b, b] : [a, b - a]
  }

  return a || b
}