const mongoose = require('mongoose')

const Schema = mongoose.Schema

const diaDiemSchema = new Schema({
    tenDiaDiem: String,
    hinhAnh: String,
})

let collectionName = 'diaDiem'
const DiaDiem = mongoose.model('DiaDiem', diaDiemSchema, collectionName)

module.exports = DiaDiem