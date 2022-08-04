const express = require('express');
const users = require('../controllers/users');
const auth = require('../controllers/auth');

const router = express.Router();

router.get('/api/users', users.getUsers);
router.post('/api/users', users.addUser);
router.get('/api/users/:firstname', users.getUser);
router.delete('/api/users/:id', users.deleteUser);
router.post('/api/uuser', users.updateUser);


//Authentication
router.post('/api/auth', auth.authenticateUser);

//Pages
/*router.get('/home', (req, res) => {
    res.send('home');
});*/

module.exports = router;