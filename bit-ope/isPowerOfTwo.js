export default isPowerOfTwo(number) {
  return (number & (number - 1)) === 0
}