
// Functions
const getFullName = (name: string, surname: string): string => {
	return name + " " + surname;
};

console.log(getFullName("Ismail", "Boularbah"));

// Interfaces
interface UserInterface {
	name: string;
	age?: number;

	// Function inside Interfaces
	getMessage(): string
}

// Objects
const user: UserInterface = {
        name: "Ismail",
        age: 19,
	getMessage() {
		return "Hello " + name;
	}
};

const user2: UserInterface = {
        name: "John",
	getMessage() {
		return "Hello " + name;
	}
};

console.log(user.getMessage()); // Hello Ismail

// Types and Unions
// Union : Operator to combine data types
interface HumanInterface {
	name: string;
	surname: string;

}

let ussername: string = "Ismail";
let pageName: string | number = "1";

let errorMessage: string | null = null;
let human: HumanInterface | null = null;

let someProp: string | number | null | undefined | string[] | object;

// Type Aliases | Union + Type Aliases
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface IUser {
	name: string;
	age: number;
	id: ID; // id: string
}

const popularTags: PopularTag[] = ["dragon", "coffe"];
const dragons: MaybePopularTag = "dragon"; // or null

// Void - Any - Never - Unknown
// Void
const sayHi = (): void => { // We don't return something from our function
	console.log("Hi");
};

// Any : Avoid it :)
const sayHi = (): any => { // No problem
	console.log("Hi");
};

// Never
const sayHi = (): never => { // No problem
	throw "never";
};

// Unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown; // Error

// Assertion : Convert one type to another
let s3: string = vUnknown as string;
// "as" : Operator makes type assertion

// Example
let pageNumber: string = '1';
let numericPageNumber: number = (pageName as unknown) as number;
console.log(numericPageNumber); // 1
