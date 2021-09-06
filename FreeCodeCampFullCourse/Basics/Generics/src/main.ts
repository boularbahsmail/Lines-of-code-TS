
// Generics
const addId = <T extends object>(obj: T) => { // Big "T" is a default name for generic
  // we can use "T" as data type : In this case it's an object
  const id = Math.random().toString(16);
  return {
    ...obj, // Spread is ES6 feature to merge objects
    id,
  };
};

interface UserInterface<T, V> {
  name: string,
  data: T,
  meta: V,
}

const user: UserInterface<{meta: string}, string > = {
  name: "Ismail",
  data: {
    meta: "Hello",
  },
  meta: "World",
};

const user2: UserInterface<string[]> = {
  name: "John",
  data: ["dragon", "keyboard", "coin"],
};

const result = addId<UserInterface>(user);
console.log("result", result);

// Example
// 1 -
export function append<T>(el: T, list: readonly T[]): T[];
const updatedArray = append<string>("Math", ["animal", "human"]);
// console.log(updatedArray);

// 2 -
export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
const searchString = "le";
const _hasSearchedString = any<string>((el: string) => el.contains(searchString) ,[
  "table",
  "book",
  "bottle"
]);
