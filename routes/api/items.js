const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new Schema({
    title:String,
    description: String,
    photo: String,
    quantity: Number
})
module.exports = mongoose.model('Item', itemSchema)