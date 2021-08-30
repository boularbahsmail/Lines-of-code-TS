
// Say Happy Birthday function
const sayHappyBirthday = (name: string, age: numner): string => {
  return `Happy Birthday ${name}, you are now ${age} years old!`;
}
// Person Object
const person = {
  name: 'Ismail',
  age: '19'
}
// Defining person name and age
const personName: string = person.name;
const personAge: number = person.age;

// Showing output
console.log(sayHappyBirthday(personName, personAge));
