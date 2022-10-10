const express = require("express");
const router = express.Router();

const {
  getLunettes,
  setLunette,
  updateLunette,
  deleteLunette,
  getByIdLunette,
} = require("../controllers/lunetteController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getLunettes).post(protect, setLunette);
router
  .route("/:id")
  .delete(protect, deleteLunette)
  .put(protect, updateLunette)
  .get(protect, getByIdLunette);

module.exports = router;
