function getBit(number, position) {
  return number>>>position & 1
}

getBit(3,1)