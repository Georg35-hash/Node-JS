function generateFibonacci(limit: number): number[] {
  const result: number[] = [0, 1]
  while (true) {
    const next = result[result.length - 1] + result[result.length - 2]
    if (next > limit) break
    result.push(next)
  }
  return result.filter(num => num <= limit)
}

function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = []
  for (let num = 2; num <= limit; num++) {
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) primes.push(num)
  }
  return primes
}

export { generateFibonacci, generatePrimeNumbers }
