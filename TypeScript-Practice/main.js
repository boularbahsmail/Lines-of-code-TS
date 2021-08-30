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
var Conference = /** @class */ (function () {
    // Conference name constructor
    function Conference(ConferenceName) {
        this.name = ConferenceName;
    }
    Conference.prototype.welcome = function (country) {
        console.log("Hello " + this.name + ". It's great to be in " + country);
    };
    return Conference;
}());
// Current Conference Name
var CurrentConference = new Conference("Name");
// Set location of the conference | welcome() -> Morocco
CurrentConference.welcome('Morocco');
var Geeks_BlaBla = /** @class */ (function (_super) {
    __extends(Geeks_BlaBla, _super);
    function Geeks_BlaBla(ConferenceName) {
        return _super.call(this, ConferenceName) || this;
    }
    Geeks_BlaBla.prototype.welcome = function (country) {
        console.log("Hi " + this.name + " from the derived class. It's great to be in " + country);
    };
    return Geeks_BlaBla;
}(Conference));
