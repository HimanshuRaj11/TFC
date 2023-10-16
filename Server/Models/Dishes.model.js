const mongoose = require("mongoose")
const schema = mongoose.Schema;
const DishesSchema = new mongoose.Schema({

    title:{type: string, required: true},
    description:{type: string, required: true},
    price:{type: Number, required: true},
    discount_percent:{type: Number},
    discount_amount:{type: Number},
    image:{type: string, required: true},
    type:{type: schema.Types.ObjectId, ref: 'Menu'}

})

module.exports = mongoose.model("Dishes", DishesSchema)