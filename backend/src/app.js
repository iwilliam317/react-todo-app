const app = require('./config/server')

const port = app.get('PORT')

app.listen(process.env.PORT || port, () => console.log(`Backend is running on port ${port}`))
require('./config/routes')(app)