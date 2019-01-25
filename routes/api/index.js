const router = require("express").Router();
const BPController = require("../../controllers/BPController");

// Matches with "/api/BPlists"
router.route("/")
  .get(
    function (req, res) {
      console.log("route been hit");
      res.send('HELLO ROUTE');
    }
  )
  
  router
  .route("/bplogchart/all")
  .get( function (req, res) {
     console.log(req.body);
     console.log("get all route been hit");
    // res.send('get route has been hit');
    BPController.findAll(req, res);
   })
// Matches with "/api/bplogcahart/:id"
router
  .route("/bplogchart/:id")
  .get( function (req, res) {
    const id = req.params.id;
     console.log(id);
     console.log(req.body);
     console.log("get by id route been hit");
    // res.send('get route has been hit');
    BPController.findAll(req, res);
   })
  .post( function (req, res) {
    const id = req.params.id;
     console.log(id);
     console.log(req.body);
     console.log(" post route been hit");
    // res.send('post route has been hit');
    BPController.create(req, res);
   })
  .put( function (req, res) {
   const id = req.params.id;
    console.log(id);
    console.log(req.body);
    console.log("put route been hit");
    BPController.update(req, res);
  })
  .delete( function (req, res) {
    const id = req.params.id;
    console.log(id);
    console.log(" delete route been hit");
    BPController.remove(req, res);
  });

module.exports = router;
