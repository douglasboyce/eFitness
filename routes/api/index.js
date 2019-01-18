const router = require("express").Router();
const BPChartRoutes = require("./BPLogChart");

// Book routes
router.use("/BPLogChart", BPChartRoutes);

module.exports = router;
