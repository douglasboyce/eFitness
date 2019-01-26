const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD
const BPListSchema = new Schema({
=======

let BPListSchema = new Schema({
>>>>>>> 5a46bb6ea46645dd953cd5199f33eee42e1d30ff
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
     pulserate:{
     type: Number
     //required: true
    },
     weight: {
      type: Number
      //required: true
     },
     date: { 
      type: Date,
       default: Date.now 
      }
      //required: true
<<<<<<< HEAD
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
=======
     }
>>>>>>> 5a46bb6ea46645dd953cd5199f33eee42e1d30ff
});

const BPList = mongoose.model("BPList", BPListSchema);

module.exports = BPList;
