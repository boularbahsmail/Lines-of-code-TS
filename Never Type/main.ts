
// Never Type
const raiseError = (message: string): never => {
  throw new Error(message);
}

console.log(raiseError("Not Found ! Haha"));
