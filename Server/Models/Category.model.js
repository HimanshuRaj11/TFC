const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    category:String,
    isTrending:{type:Boolean ,default:false}
})

module.exports = mongoose.model("Category", CategorySchema)
