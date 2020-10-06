const db = require('mongoose')

db.connect('mongodb://localhost/clinica', { useNewUrlParser: true, useUnifiedTopology: true })
db.Promise = global.Promise

module.exports = db
