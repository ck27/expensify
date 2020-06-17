const person = {
    name : "Bruce",
    age : "35",
    location: {
        city : "Gotham",
        temp : "89"
    }
};

console.log(`I am ${person.name}, ${person.age} years old.`);

console.log(`${person.location.city} is ${person.location.temp}F`);

const {name: firstName = "Anonymous", age} = person;
console.log(`I am ${firstName}, ${age} years old.`);

const {city, temp: temperature} = person.location;
console.log(`${city} is ${temperature}F`);

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        // name: "Penguin"
    }
};

const {name:publisherName = "Self-published"} = book.publisher;

console.log(`${publisherName}`);

// Destructuring Arrays

const beverage = [
    "Coffee(Hot)",
    "$2.00",
    "$2.50",
    "$2.75"
];


const [item, ,mediumCost] = beverage;

console.log(`A medium ${item} costs ${mediumCost}`);