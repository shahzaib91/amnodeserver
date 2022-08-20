const db = require('../db');
const moment = require('moment');

// create article function
exports.createBlog = (title, content, res) =>
{
    const sql = "INSERT INTO articles SET ?";
    db.con.query
    (
        sql,
        {
            title           :   title, 
            content         :   content, 
            timestamp       :   moment().format('YYYY-MM-DD HH:mm:ss')
        },
        (err, result) =>
        {
            if(err)
                res.status(400).send({status:false, message:""+err});
            else
                res.status(200).send({status:true, message:title+" has been successfully created!"});
        }
    );
}

// read article function
exports.readBlog = (id, res) =>
{
    const sql = "SELECT * FROM articles WHERE id=?";
    db.con.query
    (
        sql,
        id,
        (err, result) =>
        {
            if(err)
            {
                res.status(400).send({status:false, message:""+err});
            }
            else
            {
                if(result.length>0)
                    res.status(200).send({status:true, message:"Record", record: result[0]});
                else
                    res.status(404).send({status:false, message:"Not Found!", record: null});
            }
        }
    );
}

// read articles function
exports.readBlogs = (res) =>
{
    const sql = "SELECT * FROM articles";
    db.con.query
    (
        sql,
        (err, result) =>
        {
            if(err)
            {
                res.status(400).send({status:false, message:""+err});
            }
            else
            {
                if(result.length>0)
                    res.status(200).send({status:true, message:"Records", records: result});
                else
                    res.status(200).send({status:false, message:"No records found!", records: null});
            }
        }
    );
}

// update article function
exports.updateBlog = (id, title, content, res) =>
{
    const sql = "UPDATE articles SET title=?, content=? WHERE id=?";
    db.con.query
    (
        sql,
        [
            title,
            content,
            id
        ],
        (err, result) =>
        {
            if(err)
                res.status(400).send({status:false, message:""+err});
            else
                res.status(200).send({status:true, message:result.affectedRows+" row(s) affected"});
        }
    );
}

// delete article function
exports.deleteBlog = (id, res) =>
{
    const sql = "DELETE FROM articles WHERE id=?";
    db.con.query
    (
        sql,
        id,
        (err, result) =>
        {
            if(err)
            {
                res.status(400).send({status:false, message:""+err});
            }
            else
            {
                if(result.affectedRows>0)
                    res.status(200).send({status:true, message:result.affectedRows+" row(s) affected!"});
                else
                    res.status(404).send({status:false, message:"Not Found!"});
            }
        }
    );
}