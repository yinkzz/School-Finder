let apiUrl = "https://sch-finder-api.herokuapp.com";

const label = document.querySelectorAll(".container");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

const signupForm = document.getElementById("signupForm");

function saveToken(token) {
  console.log(token);
  window.localStorage.setItem("token", token);
}

function getToken() {
  return window.localStorage.getItem("token");
}

function redirectToSigninPage() {
  window.location.href = "./signin.html";
  }

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
  };

  signUp(data);
});

function signUp(data) {
  fetch(`${apiUrl}/api/users/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          saveToken(json.token);
          redirectToSigninPage();
        });
      }
      throw new Error("Something went wrong");
    })

    .catch((error) => {
      console.log(error);
    });
}
