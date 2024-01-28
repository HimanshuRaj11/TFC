const mongoose = require("mongoose");
const schema = mongoose.Schema;

const TableSchema = new mongoose.Schema({
  TableNumber: { type:Number },
  PriceForHour: { type:Number, default: 0 },
  discount: { type:Number, default: 0 },
  BookingDitals: [
    { BookingId: { type: schema.Types.ObjectId, ref: "BookTable" } },
  ],
});

module.exports = mongoose.model("Table", TableSchema);
