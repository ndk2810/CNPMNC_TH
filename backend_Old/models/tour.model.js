const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tourSchema = new Schema({
    tenTour: String,
    diaDiem: String,
    gia: Number,
    diemNoiBat: String,
    gioiThieu: String,
    lichTrinh: String,
    hinhAnh: String,
})

let collectionName = 'tour'
const Tour = mongoose.model('Tour', tourSchema, collectionName)

module.exports = Tour