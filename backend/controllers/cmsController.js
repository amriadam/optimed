const asyncHandler = require("express-async-handler");

const Apropos = require("../models/aproposModel");

// @desc    Get apropos
// @route   GET /api/apropos
// @access  Private
const getApropos = asyncHandler(async (req, res) => {
  const apropos = await Apropos.find();

  res.status(200).json(apropos);
});

// @desc    Update apropos
// @route   PUT /api/apropos/:id
// @access  Private
const setApropos = asyncHandler(async (req, res) => {
  const apropos = await Apropos.findById(req.params.id);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  if (!apropos) {
    res.status(400);
    throw new Error("Apropos not found");
  }

  const updatedApropos = await Apropos.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedApropos);
});
module.exports = {
  setApropos,
  getApropos,
};
