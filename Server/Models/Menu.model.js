const mongoose = require("mongoose")

const MenuSchema = new mongoose.Schema({
    title:String,
})

module.exports = mongoose.model("Menu", MenuSchema)
