const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express();
require('./app/models');
// const userCtrl = require('./app/controllers/user.controller');
// const userCTRL = require('./app/controllers/index');
const routes = require('./app/routes')(app);
routes;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('div'));


app.get('/', (req, res) => {
    res.send("Home page");
});

// app.get('/add', userCTRL.userController);

const port = process.env.port || 8000

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});