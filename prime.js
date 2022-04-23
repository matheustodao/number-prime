function isPrime(number, { array }) {
  const numberMoreThanOne = number != 1;
  if (!numberMoreThanOne) {
    return;
  }
  
  const sqrt = Math.floor(Math.sqrt(number));
  for(let divideBy = 2; divideBy <= sqrt; divideBy++) {
    if ((number % divideBy) === 0) {
      return;
    }
  }

  array.push(number);
}

function findPrimeNumber({ from = 1, to }) {
  let initialState = from;
  const primes = [];
  while(primes.length < to) {
    isPrime(initialState, { array: primes })
    initialState++
  }

  return primes;
}

const primes = findPrimeNumber({ from: 2, to: 1000 });
const sumAllPrimesFound = primes.reduce((acc, current) => acc + current);
console.log(primes);
console.log(sumAllPrimesFound);
