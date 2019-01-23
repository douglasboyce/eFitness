const router = require("express").Router();
const BPController = require("../../controllers/BPController");
const ActivityController = require("../../controllers/ActivityController");

// Matches with "/api/"
  router
  .route("/")
  .get(
    function (req, res) {
      console.log("api route been hit");
      res.send('HELLO ROUTE');
    }
  )
  .post(BPController.create);

  // Matches with "/api/bplogchart"
  router
  .route("/api/bplogchart/")
  .get(BPController.findAll)
  .post(BPController.create);

// Matches with "/api/bplogchart/:id"
  router
  .route("/api/bplogchart/:id")
  .get(BPController.findById)
  .put( BPController.update) 
  .delete(BPController.remove);

    // Matches with "/api/activitylog"
    router
    .route("/api/activitylog/")
    .get(ActivityController.findAll)
    .post(ActivityController.create);
  
  // Matches with "/api/activity/:id"
    router
    .route("/api/activitylog/:id")
    .get(ActivityController.findById)
    .put( function (req, res) {
      const id = req.params.id;
      console.log(id);
      console.log("route been hit");
      res.send('update route has been hit');
    })
    .delete( function (req, res) {
      const id = req.params.id;
      console.log(id);
      console.log("route been hit");
      res.send('delete route has been hit');
    });

module.exports = router;
