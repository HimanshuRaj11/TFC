const mongoose = require("mongoose")
const schema = mongoose.Schema;


const BookTableSchema = new mongoose.Schema({
    tableId:{type: schema.Types.ObjectId, ref: 'BookTable',require:true},
    name:{type:String, require:true},
    BookingFrom:{type:Date},
    BookingTo:{type:Date},
    numberOfPeople:{type:String},
    TotalPrice:{type:Number},
    paid:{
        paidPrice:{type:Number},
        modeOfPayment:{type:String},
        date:{type:Date}
    },
    status:{type:String, enum:["Upcoming","Ongoing", "cancle" ], default:"Upcoming"},
},{timestamps:true})

module.exports = mongoose.model("BookTable", BookTableSchema);