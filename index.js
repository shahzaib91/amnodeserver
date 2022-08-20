// add required packages
const config            = require('./config');
const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();

// configure express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test route
/*app.get('/', (req,res)=>{
    res.status(200).send({
        status:true, message:"Hello World! This is just another test call."
    });
})*/

require('./routes/routes')(app);

// start to express
app.listen(config.ex_port, (err) => {
    if (err) console.log(console.log(err));
    console.log("Expressing at port: " + config.ex_port)
})
