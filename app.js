function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative.');
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    if (name === undefined || age === undefined) {
        throw new Error('Arguments not valid.');
    } else if (typeof name !== 'string') {
        throw new TypeError('Name must be a string.');
    } else if (typeof age !== 'number') {
        throw new TypeError('Age must be a number.');
    }
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
}
// console.log(createGreeting());

const greeting1 = createGreeting('Ben', 30);
// eslint-disable-next-line no-console
console.log(greeting1);

try {
    const greeting1 = createGreeting('Ben', -50);
} catch(e) {
    console.log(`${e.name}: ${e.message}`);
}