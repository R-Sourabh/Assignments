const num = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

// a. Find the sum, min, and max
let sum = 0;
let min = num[0];
let max = num[0];

for (let i = 0; i < num.length; i++) {
    sum += num[i];

    if (num[i] < min) {
        min = num[i];
    }

    if (num[i] > max) {
        max = num[i];
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// b. Print “List is full of prime no” if every element is prime
let allPrimes = true;

for (let i = 0; i < num.length; i++) {
    if (!isPrime(num[i])) {
        allPrimes = false;
        break;
    }
}

if (allPrimes) {
    console.log('List is full of prime num');
}

// c. Print “List has a prime no” if there is a prime no in it
let hasPrime = false;

for (let i = 0; i < num.length; i++) {
    if (isPrime(num[i])) {
        hasPrime = true;
        break;
    }
}

if (hasPrime) {
    console.log('List has a prime number');
}

// d. Remove duplicate values from the list
const unique = [];

for (let i = 0; i < num.length; i++) {
    if (!unique.includes(num[i])) {
        unique.push(num[i]);
    }
}


