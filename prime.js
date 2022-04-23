function isPrime(number) {
  const numberMoreThanOne = number != 1;
  if (!numberMoreThanOne) {
    return null;
  }
  
  const sqrt = Math.floor(Math.sqrt(number));
  for(let divideBy = 2; divideBy <= sqrt; divideBy++) {
    if ((number % divideBy) === 0) {
      return null;
    }
  }

  return Number(number);
}

function findPrimeNumber({ from = 1, to }) {
  const primes = [];
  while(primes.length < to) {
    const primeNumber = isPrime(from)
    if (primeNumber) {
      primes.push(primeNumber);
    }
    from++
  }

  return primes;
}

const primes = findPrimeNumber({ from: 1, to: 1000 });
const sumAllPrimesFound = primes.reduce((acc, current) => acc + current);
console.log(primes);
console.log(sumAllPrimesFound);
