const express = require("express");
const router = express.Router();
const { getApropos, setApropos } = require("../controllers/cmsController");

const { protect } = require("../middleware/authMiddleware");

router.route("/apropos").get(protect, getApropos);
router.route("/apropos/:id").put(protect, setApropos);

module.exports = router;
