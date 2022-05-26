const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the Bank App!");
});

app.use('/', routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});