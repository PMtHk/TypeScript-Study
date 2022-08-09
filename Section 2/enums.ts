enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Jooyeob',
  age: 25,
  hobbies: ['Soccer', 'Sports'],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
