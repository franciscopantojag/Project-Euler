# Dependencies
import time
from functools import reduce

# METHOD 1: Human-like

def primesUntil(n):
    primes = [2]

    if n == 2: 
        return primes

    for i in range(3, n + 1):
        prime = True
        for j in range(0, len(primes)):
            if i % primes[j] == 0:
                prime = False
                continue

        if prime:
            primes.append(i)

    return primes

def smallestMult(n):
    divisors = primesUntil(n)

    numbers = list(range(2, n + 1))
    factors = []

    while True:
        # print(numbers)
        for i in range(0, len(divisors)):
            divisor = divisors[i]
            divided = False

            for j in range(0, len(numbers)):
                if numbers[j] % divisor == 0:
                    numbers[j] = numbers[j] / divisor
                    divided = True

            if divided:
                factors.append(divisor)

        if all([el == 1 for el in numbers]):
            break

    return reduce(lambda a, b: a * b, factors)

# METHOD 2: More succint
def smallestMultiple(num):
    arr = list(range(1, num + 1))
    adder = num

    answer = arr[len(arr) - 1] * arr[len(arr) - 2]
    while(not all([answer % el == 0 for el in arr])):
        answer += adder

    return answer


# METHOD 3: Another solution 
def smallestMult1(num):
    ans = (num - 1) * num
    arr = list(range(2, num))
    arr.reverse()
    while Dividir(ans, arr)==False:
        ans += num
    return ans

def Dividir(num, arr):
    for i in arr:
        if num % i != 0:
            return False
    return True

start = time.time()
print(smallestMult1(20))
print(f"It took {(time.time() - start) * 1000} ms")
