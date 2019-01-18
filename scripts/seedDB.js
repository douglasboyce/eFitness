const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactexerciselist"
);

const bpSeed = [
  {
    systolic: 120,
    siastolic: 78,
    pulserate: 80,
    weight: 142,
    date: new Date(Date.now())
  },
  {
    systolic: 117,
    siastolic: 80,
    pulserate: 72,
    weight: 138,
    date: new Date(Date.now())
  },
  {
    systolic: 122,
    siastolic: 76,
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
