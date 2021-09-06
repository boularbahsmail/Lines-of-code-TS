// DOM - TypeScript
// const someElement = document.querySelector(".foo") as HtmlInputElement;
var someElement = document.querySelector(".foo");
// Adding a Listener
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event ", target.value);
});
