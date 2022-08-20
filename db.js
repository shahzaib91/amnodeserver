// add required methods
const config = require("./config");
const mysql = require('mysql');

// init connection
const con = mysql.createConnection
({
    host        : config.db_host,
    user        : config.db_user,
    password    : config.db_pass,
    database    : config.db_name
});

// connect if not throw error
con.connect((err)=>{ if(err) throw err; });

module.exports = { con }