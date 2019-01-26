const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactexerciselist"
);

const activitySeed = [
  {
    exerciseName: "Leg Press",
    numberOfSets: 2,
    numberOfReps: 30,
    duration: "30 seconds",
    date: new Date(Date.now())
  },
  {
    exerciseName: "Leg Extension",
    numberOfSets: 2,
    numberOfReps: 30,
    duration: "40 seconds",
    date: new Date(Date.now())
  },
  {
    exerciseName: "Abdominal",
    numberOfSets: 2,
    numberOfReps: 30,
    duration: "1 minute",
    date: new Date(Date.now())
  },
];

db.ActivityList
  .remove({})
  .then(() => db.ActivityList.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

