"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// Generics
var addId = function (obj) {
    // we can use "T" as data type : In this case it's an object
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { // Spread is ES6 feature to merge objects
        id: id });
};
var user = {
    name: "Ismail",
    data: {
        meta: "Hello"
    },
    meta: "World"
};
var user2 = {
    name: "John",
    data: ["dragon", "keyboard", "coin"]
};
var result = addId(user);
console.log("result", result);
var updatedArray = append("Math", ["animal", "human"]);
var searchString = "le";
var _hasSearchedString = any(function (el) { return el.contains(searchString); }, [
    "table",
    "book",
    "bottle"
]);
