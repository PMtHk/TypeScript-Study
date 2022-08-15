const userName = 'zooby';
// userName = "anotherName";
let age = 30;

age = 29;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

if (age > 20) {
  // var isOld = true;
  // let isOld = true;
}

// console.log(isOld);

const addArrow = (a: number, b: number = 1) => {
  return a + b;
};

console.log(add(2, 5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'zooby',
  age: 25,
};

const copiedPerson = { ...person };

const add3 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedBumbers = add3(5, 10, 2, 3.7);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { name: firstName, age: ageNum } = person;
