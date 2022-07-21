const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const path = require('path');
const users = require('../databases/users.json');

const usersFile = '../p1/databases/users.json';

//Return users
const getUsers = (req, res) => {
    //res.send(users);
    res.redirect('home');
}

//Add new user to json database
const addUser = (req, res) => {
    let user = {
        id: uuidv4(),
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        balance: 1000,
        dateCreated: new Date().toLocaleDateString()
    }
    fs.readFile(usersFile, (err, data) => {
        if (err) {
            return console.log("Error: ", err);
        }
        let users = JSON.parse(data);
        users.push(user);

        let s_users = JSON.stringify(users,null, 4);

        fs.writeFile(usersFile, s_users, (err) => {
            if (err) {
                return console.log("Error: ", err);
            }
            console.log(`${user.firstname} added to database.`);
            res.send(users);
        });
    });
}

const getUser = (req, res) => {
    //const user = users.find((a) => a.firstname == req.param.firstname);
    fs.readFile('../databases/users.json', (err, data) => {
        if (err) {
            return console.log("Error: ", err);
        }
        res.send(JSON.parse(data));
    });
    //res.send(user);
}

const deleteUser = (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    let pos = users.indexOf(user);
    users.splice(pos, 1);
    let s_users = JSON.stringify(users, null, 4);
    fs.writeFile(usersFile, s_users, (err) => {
        if (err) {
            return console.log("Error: ", err);
        }
        console.log(`User with id ${user.id} deleted from database`);
        res.send(user);
    });
}

module.exports = {
    getUsers,
    addUser,
    getUser,
    deleteUser
};