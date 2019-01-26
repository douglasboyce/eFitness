const db = require("../models");

// Defining methods for the ActivityController
module.exports = {
findAll: function(req, res) {
  db.ExerciseList
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
findById: function(req, res) {
  db.ExerciseList
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
create: function(req, res) {
  console.log("this hit controller");
  console.log(req.body);
  db.ExerciseList
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
update: function(req, res) {
  console.log(req.params.id, "update controller");
  // console.log(req.body, 'update body');
  db.ExerciseList
    .findOneAndReplace({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
remove: function(req, res) {
  db.ExerciseList
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}
};
