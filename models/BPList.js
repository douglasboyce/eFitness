const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BPSchema = new Schema({
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

const BPList = mongoose.model("BPList", BPSchema);

module.exports = BPList;
