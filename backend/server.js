const express = require('express')
const app = express();
const PORT = 5000
const router = require('./routes/router')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/dbConn')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('dotenv').config()

connectDB();
app.use(cors())
app.use('/', router)
app.get('/', (req, res) => {
    res.json({"message": "Hello"})
})

app.listen(PORT, () => {
    console.log(`server loaded at port ${PORT}`)
})