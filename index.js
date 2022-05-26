const axios = require('axios').default;

function getUser() {
    axios.get('/api/users')
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}
getUser();
