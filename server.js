const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// Require all models
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("routes");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/efitness");

// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
db.BPList.create({ systolic: 120, diastolic: 78, pulserate: 80, weight: 142 },
  { systolic: 122, diastolic: 78, pulserate: 82, weight: 141 })
  .then(function(dbBPList) {
    console.log(dbBPList);
  })
  .catch(function(err) {
    console.log(err.message);
  });



// Route for getting all BP info from the db
app.get("/bplogchart/all", function(req, res) {
  // Grab every document in the BPList collection
  db.BPList.find({})
    .then(function(dbBPList) {
      // If we were able to successfully find BP data, send them back to the client
      console.log("I am here" + res.json(dbBPList));
      return res.json(dbBPList);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
