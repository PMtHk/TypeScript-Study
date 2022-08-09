const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple types...
} = {
  name: 'Jooyeob',
  age: 25,
  hobbies: ['Soccer', 'Sports'],
  role: [2, 'author'],
};

// person.role.push('admin'); 
// person.role[1] = 10;

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
