
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
enum StatusEnum {
  NotStarted = "NotStarted", // Assign value
  InProgress,
  Done
}

interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = Status.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.NotStarted);
