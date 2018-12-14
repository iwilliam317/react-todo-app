const mongoose = require('mongoose')

const url = process.env.MONGOLAB_URI || 'mongodb://localhost/todo'

mongoose.connect(url, (error, response) => {
    if (error) console.log (`ERROR connecting to:  ${url} -  ${error}`);
    else console.log (`Succeeded connected to: ${url}`);
})

mongoose.Promise = global.Promise

