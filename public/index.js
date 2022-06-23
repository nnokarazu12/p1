//const axios = require('axios').default;
//const auth = require('../controllers/auth');
async function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let response = await fetch("/api/users");

  let result = await response.json();

  let loginSuccess = email === result[0].email && password === result[0].password;
  if (loginSuccess) 
    console.log("Login successful!");
  else 
    console.log("Login failed.");
}
//getUser();
