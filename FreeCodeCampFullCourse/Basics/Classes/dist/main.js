// Classes - public - private - protected
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = "Anothername"; // Error
    };
    // Method
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
// Create new user
var user = new User("Ismail", "Boularbah");
console.log(user.getFullName());
//console.log(user.firstName); // Error
