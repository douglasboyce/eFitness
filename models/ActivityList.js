const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivityList = new Schema({
  exerciseName: { 
    type: String, 
    required: true 
  },
  numberOfSets: {
     type: Number , 
     },
  numberOfReps: Number,
  duration: {
      type: Number, 
     },
  date: { 
    type: Date,
     default: Date.now 
    }
});

// const ActList = mongoose.model("BPList", ActivityList);

module.exports = ActivityList;
