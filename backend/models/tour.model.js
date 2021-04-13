const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tourSchema = new Schema({
    tenTour: String,
    gia: Number,
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour