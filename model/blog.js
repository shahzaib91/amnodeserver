const db = require('../db');
const moment = require('moment');

// create article function
exports.modelCreateBlog = (title, content) =>
{
    var sql = "INSERT INTO articles (title,content,timestamp) VALUES('"+title+"','"+content+"','"+moment().format('YYYY-MM-DD HH:mm:ss')+"')";
    
    db.con.query(sql, (err, result)=>{
        if(err)
            return {status:false, message:"DB Error: "+err};
    });

    return {status:true, message:""};
}