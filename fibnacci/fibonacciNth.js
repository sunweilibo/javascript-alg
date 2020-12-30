function fabonnaciNth(n) {
  let curFib = 1
  let preFib = 0
  if (n === 1) {
    return 1
  }
  let iterationsCounter = n - 1
  while (iterationsCounter) {
    curFib += preFib
    preFib = curFib - preFib
    
    iterationsCounter--
  }
  return curFib
}

fabonnaciNth(3)