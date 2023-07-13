const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const productsRouter = require('./routes/products.route');

// Middleware
app.use(express.json());
app.use(cors())


 // respond with "hello world" when a GET request is made to the homepage
 app.get('/', (req, res) => {
    res.send('hello world')
  })

// Post and Get to database

app.use('/api/v1/product', productsRouter);




module.exports = app