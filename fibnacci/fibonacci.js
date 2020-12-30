export default function fibonacci(n) {
  const originFib = [1]
  if (n===1) {
    return fibonacci
  }

  let currentFib = 1
  let preFib = 0

  let counter = n - 1
  while(counter) {
    currentFib += preFib
    preFib = currentFib - preFib

    originFib.push(currentFib)

    counter--
  }

  return originFib
}