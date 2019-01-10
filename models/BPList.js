const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BloodPressureList = new Schema({
  diastolic: { 
    type: Number, 
    required: true 
  },
  systolic: {
     type:Number , 
     required: true
     },
     pulserate: Number,
     weight: {
      type: Number, 
      required: true
     },
  date: { 
    type: Date,
     default: Date.now 
    }
});

const BPChart = mongoose.model("BPList", BloodPressureList);

module.exports = BPList;
