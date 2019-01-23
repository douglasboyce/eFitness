const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactexerciselist"
);

const bpSeed = [
  {
    diastolic: 78,
    systolic: 120,
    pulserate: 80,
    weight: 142,
    date: new Date(Date.now())
  },
  {
    diastolic: 80,
    systolic: 117,
    pulserate: 72,
    weight: 138,
    date: new Date(Date.now())
  },
  {
    diastolic: 76,
    systolic: 122,
    pulserate: 78,
    weight: 140,
    date: new Date(Date.now())
  }
];

db.BPList
  .remove({})
  .then(() => db.BPList.collection.insertMany(bpSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

