var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes - public - private - protected
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    // Method
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = "Anothername"; // Error
    };
    // Method
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 19; // Accessible only inside class
    return User;
}());
// Inheritences
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method setEditor
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    // Method getEditor
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
// Create new user
var user = new User("Ismail", "Boularbah");
console.log(user.getFullName());
//console.log(user.firstName); // Error
console.log(User.maxAge);
var admin;
new Admin("John", "Doe");
console.log(admin.getEditor());
