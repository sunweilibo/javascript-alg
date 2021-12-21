function countSetBits(originalNumber) {
  let setBitCount = 0
  let number = originalNumber

  while (number) {
    setBitCount += number & 1
    number>>>=1
  }
  return setBitCount
}

countSetBits(15)