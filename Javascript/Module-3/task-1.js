const people = [
    { "id": 1, "name": "Amit Kumar", "age": 25 },
    { "id": 2, "name": "Rahul Dixit", "age": 20 },
    { "id": 3, "name": "Ravi Joshi", "age": 55 },
    { "id": 4, "name": "Rohit Verma", "age": 35 },
    { "id": 5, "name": "Ajay Jain", "age": 17 },
];

// a. Print id and name of the youngest and oldest person
const youngest = people.reduce((min, person) => person.age < min.age ? person : min, people[0]);
const oldest = people.reduce((max, person) => person.age > max.age ? person : max, people[0]);
console.log("Youngest Person:", youngest.id, youngest.name, "Oldest Person:", oldest.id, oldest.name);

// b. Create another list having id and name of all the people above 18 years
const ageList = people.filter(person => person.age > 18).map(person => ({ id: person.id, name: person.name }));
console.log("People above 18:", ageList);

// c. Find the average age
const averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
console.log("Average Age:", averageAge);

// d. Create 2 lists with names starting with only ‘A’ and ‘R’ respectively
const startsWithA = people.filter(person => person.name.startsWith('A')).map(person => ({ id: person.id, name: person.name }));
console.log("Names starting with 'A':", startsWithA);

const startsWithR = people.filter(person => person.name.startsWith('R')).map(person => ({ id: person.id, name: person.name }));
console.log("Names starting with 'R':", startsWithR);
