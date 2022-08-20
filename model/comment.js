const db = require('../db');
const moment = require('moment');

// create article function
exports.createComment = (user_name, content, parent, belongs_to, res) =>
{
    const sql = "INSERT INTO comments SET ?";
    db.con.query
    (
        sql,
        {
            user_name       :   user_name, 
            content         :   content, 
            parent          :   parent,
            belongs_to      :   belongs_to,
            timestamp       :   moment().format('YYYY-MM-DD HH:mm:ss')
        },
        (err, result) =>
        {
            if(err)
                res.status(400).send({status:false, message:""+err});
            else
                res.status(200).send({status:true, message:"Comment has been posted successfully!"});
        }
    );
}

// read articles function
exports.readComments = (blog_id, res) =>
{
    const sql = "SELECT * FROM comments WHERE belongs_to=? ORDER BY timestamp DESC";
    db.con.query(sql,[blog_id],(err,result,field)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).send(result);
    })
}