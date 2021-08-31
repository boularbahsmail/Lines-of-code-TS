
// Getters and Setters
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    // Get age
    public get age() {
        return this._age;
    }

    // Set a specific age
    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    // Get full name
    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

// Defining new person
let person = new Person();
person.age = 10;
console.log(person);
