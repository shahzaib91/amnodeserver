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
    db.con.query(sql,[blog_id],(err,result,field)=>
    {
        if(err)
        {
            res.status(400).send({status:false, message:""+err});
        }
        else
        {
            const sortedArr = createDataTree(result);
            res.status(200).send({status:true, message:"Records", records: sortedArr});
        }
    })
}

// helper function to create proper tree
const createDataTree = dataset => {
    const hashTable = Object.create(null);
    dataset.forEach(aData => hashTable[aData.id] = {...aData, childNodes: []});
    const dataTree = [];
    dataset.forEach(aData => {
      if(aData.parent) hashTable[aData.parent].childNodes.push(hashTable[aData.id])
      else dataTree.push(hashTable[aData.id])
    });
    return dataTree;
};