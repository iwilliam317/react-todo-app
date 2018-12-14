module.exports = app => {

    const router = require('express').Router();
    app.use('/api', router)

    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}