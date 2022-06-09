const axios = require('axios').default;
const auth = require('./controllers/auth');

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('/api/auth', {
        email,
        password
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}
//getUser();
