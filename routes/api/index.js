const router = require("express").Router();
const BPController = require("../../controllers/BPController");

// Matches with "/api/books"
router
  .route("/")
  .get(
    function (req, res) {
      console.log("api route been hit");
      res.send('HELLO ROUTE');
    }
  )
  .post(BPController.create);

  router
  .route("/bplogchart/")
  .get(BPController.findAll)
  //   function(res, req) {
  //     const data = res.data;
  //     console.log("bplogchart route has been hit");
  //     console.log(data);
  //   }
  // )
  .post(BPController.create);

// Matches with "/api/books/:id"
router
  .route("/bplogchart/:id")
  .get(BPController.findById)
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
