const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const weatherSchema = new Schema({
    name: String,
    lastUpdate: Date,
    temperature: Number,
});

const City = mongoose.model("City", weatherSchema);
module.exports = City;