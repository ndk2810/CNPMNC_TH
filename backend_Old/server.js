const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const axios = require('axios')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("Connection to MongoDB was successfully established !")
})

app.use(cors())
app.use(express.json())

const diaDiemRouter = require('./routes/diaDiem')
const tourRouter = require('./routes/tour')

app.use('/diaDiem', diaDiemRouter)
app.use('/tour', tourRouter)


app.listen(port, () => {
    console.log('Server is running on port: ', port)
})