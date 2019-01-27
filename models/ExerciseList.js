const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exerciseDay: { 
    type: String, 
    required: true 
  },
  exerciseName: { 
    type: String, 
    required: true 
  },
  pounds: { 
    type: String, 
    required: true 
  },
  numberOfSets: {
     type: Number , 
     },
  numberOfReps: Number,
  duration: {
      type: String, 
     },
  date: { 
    type: Date,
     default: Date.now 
    }
});

const ExerciseList = mongoose.model("ExerciseList", ExerciseSchema);

module.exports = ExerciseList;
