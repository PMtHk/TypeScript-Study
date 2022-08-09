const person = {
  name: 'Jooyeob',
  age: 25,
  hobbies: ['Soccer', 'Sports'],
};

let favoriteActivites: string[];
favoriteActivites = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}