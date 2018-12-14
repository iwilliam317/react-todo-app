const restful = require('restful')
const mongoose = restful.mongoose

const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true, 
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ToDo = mongoose.model('ToDo', TodoSchema)

module.exports = ToDo