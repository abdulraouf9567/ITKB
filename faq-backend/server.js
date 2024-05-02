const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');


const kbRoutes= require('./routes/kbroutes')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT | 3000
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING

//middleware
app.use(express.json())
app.use(morgan('dev'));
app.use(cors({
  origin: '*'
}));



//routes
app.use('/api/kbroutes',kbRoutes)




// connect to db
mongoose.connect(DB_CONNECTION_STRING)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 