let apiUrl = "https://sch-finder-api.herokuapp.com";

const userEmail = document.getElementById("email").value;
const userPassword = document.getElementById("password").value;

const signinForm = document.getElementById("signinForm");

function saveToken(token) {
  console.log(token);
  window.localStorage.setItem("token", token);
}

function getToken() {
  return window.localStorage.getItem("token");
}

function redirectToHomepage() {
  window.location.href = "./index.html";
}

function signIn(userData) {
  fetch(`${apiUrl}/api/users/signin`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((json) => saveToken(json.token));
      }
      alert("Oops! confirm your login details");
      throw new Error("Something went wrong");
    })
    .then((responseJson) => {
      redirectToHomepage();
    })
    .catch((error) => {
      console.log(error);
    });
}

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let loginDetails = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  signIn(loginDetails);
});
