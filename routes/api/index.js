const router = require("express").Router();
const BPController = require("../../controllers/BPController");

// Matches with "/api/books"
router.route("/")
  .get(
    function (req, res) {
      console.log("route been hit");
      res.send('HELLO ROUTE');
    }
  )
  

// Matches with "/api/books/:id"
router
  .route("/bplogchart/:id")
  .get( function (req, res) {
    const id = req.params.id;
     console.log(id);
     console.log(req.body);
     console.log("route been hit");
     res.send('get route has been hit');
   })
  .post( function (req, res) {
    const id = req.params.id;
     console.log(id);
     console.log(req.body);
     console.log("route been hit");
     res.send('post route has been hit');
   })
  .put( function (req, res) {
   const id = req.params.id;
    console.log(id);
    console.log(req.body);
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
