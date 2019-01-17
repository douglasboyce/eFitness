const router = require("express").Router();
const ActivityController = require("../../controllers/ActivityController");

// Matches with "/api/activity"
router.route("/")
  .get(ActivityController.findAll)
  .post(ActivityController.create);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(ActivityController.findById)
  .put(ActivityController.update)
  .delete(ActivityController.remove);

module.exports = router;
