// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

////////// METHOD 1 (Human-like)

const primesUntil = (n) => {
  const primes = [2];

  if (n === 2) return primes;

  for (let i = 3; i <= n; i++) {
    let prime = true;
    for (let j = 0; j < primes[primes.length]; j++) {
      if (i % primes[j] === 0) {
        prime = false;
        continue;
      }
    }

    if (prime) primes.push(i);
  }

  return primes;
};

function smallestMult(n) {
  let divisors = primesUntil(n);
  let numbers = [...Array(n + 1).keys()].slice(1);
  let factors = [];

  while (!numbers.every((num) => num === 1)) {
    for (let j = 0; j < divisors.length; j++) {
      let divisor = divisors[j];
      let divided = false;

      numbers.forEach((num, i) => {
        if (num % divisor === 0) {
          numbers[i] = num / divisor;
          divided = true;
        }
      });
      
      if (divided) factors.push(divisor);
    }
  }

  return factors.reduce((a, b) => a * b);
}

/////// METHOD 2: More succint

const smallestMultiple = (num) => {
  // Imagine we need a number, that is diviible by: 1,2,3,4,5
  // Our first possible answer is the highest of the list
  // We check, if it is not, we keep adding the same number
  // Until we find the solution

  const arr = Array.from({ length: num }).map((_, b) => b + 1);
  let answer = arr[arr.length - 1] * arr[arr.length - 2];

  while (!arr.every((n) => answer % n === 0)) {
    answer += num;
  }

  return answer;
};

/////// METHOD 3: Another solution 

const smallestMult1 = (num) => {
  //Helper function
  function divide (n, arr) {
    for (let i = 0; i < arr.length; i++) {
      rest = n % arr[i];
      if (n % arr[i] !== 0) {
        return false
      }
    }
    return true
  };

  let ans = (num - 1) * num;
  let array = [...Array(num - 2)].map((_, b)=> b + 2).reverse()

  while(divide(ans, array) == false){
    ans += num
  };
  
  return ans
};

const start = Date.now();
console.log(smallestMult1(20));
console.log(`Took: ${Date.now() - start} ms`);
