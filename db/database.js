const mysql = require('mysql')

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

//OPEN THE MYSQL CONNECTION
db.connect(err => {
  if (err) throw err
  console.log('DB Connected!')
})

module.exports = db
