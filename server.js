const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const colors = require('colors');

// Imported files
const app = require('./app');

mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log(`Database connection is ready`.yellow.bold);
})

// Server

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is connected successfully on port: ${port}`.blue.bold)
})