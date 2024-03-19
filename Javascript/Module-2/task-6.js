function checkNum(nums) {
    let setNum = new Set();

    for (let num of nums) {
        if (setNum.has(num)) {
            return true;
        }
        setNum.add(num);
    }

    return false;
}

const array1 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
console.log(checkNum(array1));  // Output: true

const array2 = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19];
console.log(checkNum(array2));  // Output: false
