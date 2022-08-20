// import blog model
const blogModel = require('../model/blog');

// create
exports.createBlog = (req,res) =>
{
    // validate
    if(req.body.title=="" || req.body.content==""){
        res.status(400).send({
            status:false, message:"Title or Content is empty!"
        }); 
        return;
    }

    // create
    const result = blogModel.modelCreateBlog(req.body.title, req.body.content);

    // handle query error
    if(!result.status){
        res.status(400).send({
            status:false, message: result.message
        }); 
        return;
    }

    // return success
    res.status(200).send({
        status:false, message:"Blog has been created successfully!"
    }); 
    return;
}