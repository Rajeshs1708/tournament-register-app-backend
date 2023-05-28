require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//IMPORT ROUTES
const tournament = require('./routes/tournamentRoutes')

//MIDDLEWARE
const app = express()
// app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '5mb' }))
app.use(
  bodyParser.urlencoded({
    limit: '5mb',
    extended: true
  })
)

//ROUTE
app.use('/api', tournament)

//PORT
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`)
})
