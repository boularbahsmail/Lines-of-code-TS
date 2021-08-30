
// Building a person class
class Person {
    id: number; // public || private
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string  {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person(47,'Ismail','Boularbah');
console.log(person.getFullName());


// Access Modifiers
/* Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

  • private
  • protected
  • public

* Note that TypeScript controls the access logically during compilation time, not at runtime. *
*/

class Employee {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let employee = new Employee('153-07-3130', 'John', 'Doe');
console.log(employee.ssn); // compile error

// On constructor parametres
class Human {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
