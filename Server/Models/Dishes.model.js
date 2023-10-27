const mongoose = require("mongoose")
const schema = mongoose.Schema;
const DishesSchema = new mongoose.Schema({

    dish_Name:{type: String, require: true},
    description:{type: String, require: true},
    price:{type: Number, require: true},
    discount_percent:{type: Number},
    discount_amount:{type: Number},
    image:{type: String},
    category:{type: schema.Types.ObjectId, ref: 'Menu'},
    Ingredients:{type:String},
    Cuisine:{type:String},
    inStock:{type:Boolean, default:true},
    isVej:{type:Boolean, default:true},
    special_offer:{type:Boolean, default:false},
    Ratings:{type:Number},
    Reviews:[{
        people:{type:String, require:true},
        rating:{type:Number, require:true},
        comment:{type:String, require:true},
        time : { type : Date, default: Date.now() }
    }],
})

module.exports = mongoose.model("Dishes", DishesSchema)