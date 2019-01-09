const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BloodPressureChart = new Schema({
  diastolic: { 
    type: Number, 
    required: true 
  },
  systolic: {
     type:Number , 
     required: true
     },
     pulsRrate: Number,
     wight: {
      type: Number, 
      required: true
     },
  date: { 
    type: Date,
     default: Date.now 
    }
});

const BPChart = mongoose.model("Book", BloodPressureChart);

module.exports = BPChart;
