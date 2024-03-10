function deepClone(obj) {
    const jsonString = JSON.stringify(obj);
    const clone = JSON.parse(jsonString);
    return clone;
}

const obj = {
    name: "Sourabh",
    age: 30,
    address: {
        city: "Indore",
        country: "India"
    }
};

const clonedObject = deepClone(obj);

console.log("Original Object:", obj);
console.log("Cloned Object:", clonedObject);
