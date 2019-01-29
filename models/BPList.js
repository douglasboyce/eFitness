const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BPListSchema = new Schema({
  dayOfTheWeek: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  diastolic: { 
    type: Number, 
    required: true 
  },
  systolic: {
     type:Number, 
     required: true
     },
     pulserate:{
     type: Number,
     required: true
    },
     weight: {
      type: String,
      required: true
     },
     date: { 
      type: Date,
       default: Date.now 
      }
      //required: true
/*const BloodPressureList = new Schema({
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
    }*/
});

const BPList = mongoose.model("BPList", BPListSchema);

module.exports = BPList;
