module.exports = app => {

    const router = require('express').Router();
    app.use('/api', router)

    // node-restful
    const todoService = require('../api/controllers/todoService')
    // register routes [GET, PUT, POST, DELETE]
    todoService.register(router, '/todos')
}