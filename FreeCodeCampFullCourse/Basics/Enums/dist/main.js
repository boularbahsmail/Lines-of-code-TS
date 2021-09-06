// Object
/* const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2
}

console.log(statuses.inProgress);
*/
/////////////////////////////////
// Enums : we can use enums as a value and as a data type
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = void 0] = "InProgress";
    StatusEnum[StatusEnum["Done"] = void 0] = "Done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = Status.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.NotStarted);
