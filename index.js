// add required packages
const config            = require('./config');
const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();

// configure express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes registration
require('./routes/routes')(app);

// start to express
app.listen(config.ex_port, (err) => {
    if (err) console.log(console.log(err));
    console.log("Expressing at port: " + config.ex_port)
})
