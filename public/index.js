//const axios = require('axios').default;
//const auth = require('../controllers/auth');
function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);

  email = "";
  password = "";
  location.href = "/home.html";
  //let response = await fetch("/api/users");

  //let result = await response.json();

  //console.log(result);

  /*let loginSuccess = email === result[0].email && password === result[0].password;
  if (loginSuccess) 
    console.log("Login successful!");
  else 
    console.log("Login failed.");
    */
}
function confirmDeposit() {
  let amount = prompt("How much to deposit?");
  let a = {
    balance: Number(amount)
  };
  fetch("/api/uuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(a)
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    })
}
//getUser();
