
// Interfaces
interface UserInterface {
  getFullName(): string;
}

// Classes - public - private - protected
class User implements UserInterface {
  private firstName: string; // Accessible only inside class
  private lastName: string;
  readonly unchangableName: string; // constant
  static readonly maxAge = 19; // Accessible only inside class

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  // Method
  changeUnchangableName(): string {
    // this.unchangableName = "Anothername"; // Error
  }

  // Method
  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// Inheritences
class Admin extends User {
  private editor: string;

  // Method setEditor
  setEditor(editor: string): void {
    this.editor = editor;
  }

  // Method getEditor
  getEditor(): string {
    return this.editor;
  }
}

// Create new user
const user = new User("Ismail", "Boularbah");
console.log(user.getFullName());
//console.log(user.firstName); // Error
console.log(User.maxAge);

const admin new Admin("John", "Doe");
console.log(admin.getEditor());
