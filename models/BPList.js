const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let BPListSchema = new Schema({
  dayOfTheWeek: {
    type: String
    //required: true
  },
  diastolic: { 
    type: Number 
    //required: true 
  },
  systolic: {
     type:Number  
     //required: true
     },
     pulserate: Number,
     weight: {
      type: Number 
      //required: true
const BloodPressureList = new Schema({
  systolic: { 
    type: Number, 
    required: true 
  },
  diastolic: {
     type:Number , 
     required: true
     },
  pulserate: Number,
  weight: {
      type: Number, 
     },
  date: { 
    type: Date,
     default: Date.now 
    }
});

const BPList = mongoose.model("BPList", BPListSchema);

module.exports = BPList;
