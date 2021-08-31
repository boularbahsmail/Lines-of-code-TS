
// Defining a Person
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Get full name
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // Describing a person
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}


// Constructor
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
      ) {
      // call the constructor of the Person class:
      super(firstName, lastName);
    }
}

// Defining new employee
let employee = new Employee('Ismail','Boularbah','Front-end Developer');
console.log(employee.getFullName());
console.log(employee.describe());
