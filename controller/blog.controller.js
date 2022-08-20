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
    blogModel.createBlog(req.body.title, req.body.content, res);
}

// read
exports.readBlog = (req, res) =>
{
    blogModel.readBlogs(req.params.id, res);
}

// read many
exports.readBlogs = (req, res) =>
{
    blogModel.readBlogs(res);
}

// update
exports.updateBlog = (req,res) =>
{
    // validate
    if(req.body.title=="" || req.body.id=="" || req.body.content==""){
        res.status(400).send({
            status:false, message:"ID, Title or Content is empty!"
        }); 
        return;
    }

    // create
    blogModel.updateBlog(req.body.id, req.body.title, req.body.content, res);
}

// delete
exports.deleteBlog = (req,res) =>
{
    blogModel.deleteBlog(req.params.id, res);
}