// Building employee class
var Employee = /** @class */ (function () {
    // Difining properties
    function Employee(firstName, lastName, bio, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.role = role;
    }
    return Employee;
}());
// Firebase DB
var firebaseConfig = {
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
var form = document.querySelector('.Submit-form');
var db = firebase.firestore();
// When button submitted
form.addEventListener('submit', function (e) {
    // Getting employee information
    var firstName = document.querySelector("#employee-first-name").value;
    var lastName = document.querySelector("#employee-last-name").value;
    var bio = document.querySelector("#employee-bio").value;
    var role = document.querySelector("#employee-role").value;
    var applied = document.querySelector('.applied');
    // let employeesDiv = document.querySelector(".employees-div");
    if (firstName === "" ||
        lastName === "" ||
        bio === "" ||
        role === "") {
        e.preventDefault();
        alert("Fields Empty");
    }
    else {
        e.preventDefault();
        var employee = new Employee(firstName, lastName, bio, role);
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
    */ 
});
