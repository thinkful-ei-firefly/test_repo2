/* eslint-disable strict */
function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
}
// console.log(createGreeting());

const greeting1 = createGreeting('Ben', 30);
console.log(greeting1);