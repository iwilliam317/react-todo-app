const ToDo = require('../models/todo')

ToDo.methods(['get', 'post', 'put', 'delete']);

module.exports = ToDo