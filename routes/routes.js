module.exports = (app) =>
{
    const blogController = require('../controller/blog.controller');

    app.post('/createBlog', blogController.createBlog)
}