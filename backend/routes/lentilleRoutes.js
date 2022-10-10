const express = require("express");
const router = express.Router();
const {
  getLentilles,
  setLentille,
  updateLentille,
  deleteLentille,
  getByIdLentille,
} = require("../controllers/lentillesController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getLentilles).post(protect, setLentille);
router
  .route("/:id")
  .delete(protect, deleteLentille)
  .put(protect, updateLentille)
  .get(protect, getByIdLentille);

module.exports = router;
