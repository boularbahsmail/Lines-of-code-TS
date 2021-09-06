// Functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Ismail", "Boularbah"));
// Objects
var user = {
    name: "Ismail",
    age: 19,
    getMessage: function () {
        return "Hello " + name;
    }
};
var user2 = {
    name: "John",
    getMessage: function () {
        return "Hello " + name;
    }
};
console.log(user.getMessage()); // Hello Ismail
var ussername = "Ismail";
var pageName = "1";
var errorMessage = null;
var human = null;
var someProp;
var popularTags = ["dragon", "coffe"];
var dragons = "dragon"; // or null
// Void - Any - Never - Unknown
// Void
var sayHi = function () {
    console.log("Hi");
};
// Any : Avoid it :)
var sayHi = function () {
    console.log("Hi");
};
// Never
var sayHi = function () {
    throw "never";
};
// Unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown; // Error
// Assertion : Convert one type to another
var s3 = vUnknown;
// "as" : Operator makes type assertion
// Example
var pageNumber = '1';
var numericPageNumber = pageName;
console.log(numericPageNumber); // 1
