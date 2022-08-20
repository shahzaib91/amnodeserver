module.exports = (app) =>
{
    // blog routes
    const blogController = require('../controller/blog.controller');
    app.post('/createBlog', blogController.createBlog);
    app.post('/updateBlog', blogController.updateBlog);
    app.get('/readBlog/:id', blogController.readBlog);
    app.get('/readBlogs', blogController.readBlogs);
    app.get('/deleteBlog/:id', blogController.deleteBlog);
}