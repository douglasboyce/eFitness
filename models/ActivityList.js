const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Activityschema = new Schema({
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

const ActivityList = mongoose.model("ActivityList", Activityschema);

module.exports = ActivityList;
