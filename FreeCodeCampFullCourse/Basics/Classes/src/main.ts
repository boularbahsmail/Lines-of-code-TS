
// Classes - public - private - protected
class User {
  private firstName: string; // Accessible only inside class
  private lastName: string;
  readonly unchangableName: string; // constant

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  changeUnchangableName(): string {
    // this.unchangableName = "Anothername"; // Error
  }

  // Method
  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// Create new user
const user = new User("Ismail", "Boularbah");
console.log(user.getFullName());
//console.log(user.firstName); // Error
