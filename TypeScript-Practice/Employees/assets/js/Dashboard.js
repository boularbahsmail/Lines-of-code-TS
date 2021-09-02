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
var db = firebase.firestore();
let employeesCollection = document.querySelector(".employees-div");

function createEmployee(firstName, lastName, bio, role, docId) {
  let employeeCardCompnenet = `
    <div class="wrapper text-start" id="${docId}">
      <div class="info">
        <h3>${firstName} ${lastName}</h3>
        <p class="my-3">${bio}</p>
        <span class="btn-warning role">${role}</span>
      </div>
      <div class="delete-action">
        <button class="btn delete btn-danger" title="Delete">X</button>
      </div>
    </div>
  `;
  let employeeCard = document.createElement("div");
  employeeCard.innerHTML = employeeCardCompnenet;
  employeesCollection.appendChild(employeeCard);

  let deletAction = document.querySelector(".delete-action");
  let cross = document.querySelectorAll(".delete");
  let wrapper = document.querySelectorAll(".wrapper");

  for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener("click", (e) => {
      if(wrapper[i].id === docId) {
        let id = wrapper[i].id;
        document.getElementById(id).style.display = "none";
        db.collection('employees').doc(id).delete();
      }
    });
  }

  /*
  for (let i; i <= cross.length; i++) {
    cross[i].addEventListener('click', () => {
      for (let j; j <= wrapper.length; j++) {
        if(wrapper[j].id === docId) {
          db.collection("employees").doc(docId).delete().then(() => {
            console.log("Document successfully deleted!");
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });
        }
      }
    })
  }
  */
}
// Get Posts
function getPosts() {
  db.collection("employees")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createEmployee(
          docs.data().First_name,
          docs.data().Last_name,
          docs.data().Bio,
          docs.data().Role,
          docs.id
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
