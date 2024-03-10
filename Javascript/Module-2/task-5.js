const numberArray = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

// a. Find the sum, min, and max
const sum = numberArray.reduce((acc, num) => acc + num, 0);
const min = Math.min(...numberArray);
const max = Math.max(...numberArray);
console.log(`Sum: ${sum}, Min: ${min}, Max: ${max}`);

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// b. Print "List is full of prime no" if every element is prime
const allPrimes = numberArray.every(isPrime);
if (allPrimes) {
    console.log("List is full of prime no");
} else {
    console.log("List is not full of prime no");
}

// c. Print "List has a prime no" if there is a prime no in it
const hasPrime = numberArray.some(isPrime);
if (hasPrime) {
    console.log("List has a prime no");
} else {
    console.log("List does not have a prime no");
}

// d. Remove duplicate values from the list
const uniqueArray = numberArray.filter((value, index, self) => self.indexOf(value) === index);
console.log("Unique Array:", uniqueArray);

// e. Remove duplicate values from the list without using the specified methods
const remove = [...new Set(numberArray)];
console.log("Unique Array Without Methods:", remove);