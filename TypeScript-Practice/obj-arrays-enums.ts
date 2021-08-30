// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } =

// const ADMIN = 0;
// const READ_ONLY = 0;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
    name: "Ismail",
    age: 18,
    hobbies: ['Sports', 'Coding'],
    role: Role.ADMIN
};

// person.role.push('Admin');
// person.role[1] = 10;

// person.role = [0, 'Admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Dance'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}
