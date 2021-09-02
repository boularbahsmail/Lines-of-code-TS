
// Building employee class
class Employee {
    firstName: string;
    lastName: string;
    bio: string;
    role: string;

    // Difining properties
    constructor(firstName: string, lastName: string, bio: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.role = role;
    }

    // Welcome message
    /* Welcome(): Any {
        return `Hello ${this.firstName} ${this.lastName}, Welcome to our company as a ${this.role}.`;
    } */
}

// Firebase DB
const firebaseConfig = {
  apiKey: "AIzaSyB2gSg1q6ktARsynClCUyy7vnxgTgmBoWY",
  authDomain: "employees-97c3f.firebaseapp.com",
  projectId: "employees-97c3f",
  storageBucket: "employees-97c3f.appspot.com",
  messagingSenderId: "575612316275",
  appId: "1:575612316275:web:e2a7d6889a3955516f1806"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Form
let form = document.querySelector('.Submit-form');

let db = firebase.firestore();

// When button submitted
form.addEventListener('submit', (e) => {
  // Getting employee information
  let firstName = document.querySelector("#employee-first-name").value;
  let lastName = document.querySelector("#employee-last-name").value;
  let bio = document.querySelector("#employee-bio").value;
  let role = document.querySelector("#employee-role").value;
  let applied = document.querySelector('.applied');
  // let employeesDiv = document.querySelector(".employees-div");
    if (
    firstName === "" ||
    lastName === "" ||
    bio === "" ||
    role === ""
  ) {
    e.preventDefault();
    alert("Fields Empty");
  } else {
    e.preventDefault();
    let employee = new Employee(firstName, lastName, bio, role);
    // console.log(employee);
    db.collection("employees").doc().set({
        First_name: firstName,
        Last_name: lastName,
        Bio: bio,
        Role: role
      });
    form.style.display = "none";
    applied.style.display = "block";
    form.reset();
  }
  /*
  if(firstName && lastName && bio && role) {
    e.preventDefault();
    // save contact information
    let employeedb = [firstName, lastName, bio, role];
        info.push(employeedb).then((data) =>
            alert("You applied successfully !");
            form.reset();
        ).catch(err => alert("Apply failed !"));

      } else {
          alert("All inputs are required fields !");
      }
  */
  // Checking statement
    // Showing Welcome message

    /*
    let employeeCardCompnenet = `
      <div class="wrapper text-start">
        <h3>${firstName} ${lastName}</h3>
        <p class="my-3">${bio}</p>
        <span class="btn-warning role">${role}</span>
      </div>
    `;
    let employeeCard = document.createElement("div");
    employeeCard.innerHTML = employeeCardCompnenet;
    employeesDiv.appendChild(employeeCard);
    */})
