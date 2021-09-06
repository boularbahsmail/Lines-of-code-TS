
// DOM - TypeScript
// const someElement = document.querySelector(".foo") as HtmlInputElement;
const someElement = document.querySelector(".foo");

// Adding a Listener
someElement.addEventListener("blur", (event) => {
  const target = event.target as HtmlInputElement;
  console.log("event ", target.value);
})
