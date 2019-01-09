const router = require("express").Router();
const BPController = require("../../controllers/BPController");

// Matches with "/api/books"
router.route("/")
  .get(BPController.findAll)
  .post(BPController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(BPController.findById)
  .put(BPController.update)
  .delete(BPController.remove);

module.exports = router;
