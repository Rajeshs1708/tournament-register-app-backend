const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

//OPEN THE MYSQL CONNECTION
db.connect(err => {
  if (err) throw err
  console.log('DB Connected!')
})

module.exports = db
