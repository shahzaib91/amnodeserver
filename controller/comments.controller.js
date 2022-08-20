// import blog model
const commentModel = require('../model/comment');

// create
exports.createComment = (req,res) =>
{
    // validate
    if(req.body.user_name=="" || req.body.content=="" || req.body.belongs_to==""){
        res.status(400).send({
            status:false, message:"Name, Content or Article is empty!"
        }); 
        return;
    }

    // check if parent missing set to 0
    if(typeof(req.body.parent)=='undefined'){
        req.body.parent = 0;
    }

    // create
    commentModel.createComment(req.body.user_name, req.body.content, req.body.parent, req.body.belongs_to, res);
}

// read many of x blog
exports.readComments = (req, res) =>
{
    commentModel.readComments(req.params.id, res);
}