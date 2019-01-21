const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BPSchema = new Schema({

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

});


const BPList = mongoose.model("BPList", BPListSchema);


module.exports = BPList;
