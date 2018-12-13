const app = require('./config/server')

const port = app.get('PORT')

app.listen(port, () => console.log(`Backend is running on port ${port}`))