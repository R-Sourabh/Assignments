const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const oddNumbers = numbers.filter(num => num % 2 !== 0);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const primeNumbers = numbers.filter(isPrime);

console.log('Original Numbers:', numbers);
console.log('Odd Numbers:', oddNumbers);
console.log('Even Numbers:', evenNumbers);
console.log('Prime Numbers:', primeNumbers);
