const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/styles'));
app.set('view engine', 'hbs');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});