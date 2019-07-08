/* eslint-disable strict */
function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative.');
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    if (name === undefined || age === undefined ) {
        throw new Error('Arguments not valid.');
    }  else {
        return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
}
}
// console.log(createGreeting());

const greeting1 = createGreeting('Ben', 30);
console.log(greeting1);

try {
    const greeting1 = createGreeting('Ben', -10);
} catch(e) {
    console.log(`${e.name}: ${e.message}`);
}