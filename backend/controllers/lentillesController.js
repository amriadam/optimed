const asyncHandler = require("express-async-handler");

const Lentilles = require("../models/lentillesModel");

// @desc    Get lentilles
// @route   GET /api/lentilles
// @access  Private
const getLentilles = asyncHandler(async (req, res) => {
  const lentilles = await Lentilles.find();

  res.status(200).json(lentilles);
});

// @desc    Set lentille
// @route   POST /api/lentilles
// @access  Private
const setLentille = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("empty body");
  }

  const lentille = await Lentilles.create({
    type: req.body.type,
    marque: req.body.marque,
    quantite: req.body.quantite,
    filtreUv: req.body.filtreUv,
    couleur: req.body.couleur,
    fournisseur: req.body.fournisseur,
    description: req.body.description,
    photos: req.body.photos,
  });

  res.status(200).json(lentille);
});

// @desc    update lentille
// @route   PUT /api/lentilles/:id
// @access  Private
const updateLentille = asyncHandler(async (req, res) => {
  const lentille = await Lentilles.findById(req.params.id);

  if (!lentille) {
    res.status(400);
    throw new Error("lentille not found");
  }

  const updatedlentille = await Lentilles.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedlentille);
});

// @desc    Delete lentille
// @route   DELETE /api/lentilles/:id
// @access  Private
const deleteLentille = asyncHandler(async (req, res) => {
  const lentille = await Lentilles.findById(req.params.id);

  if (!lentille) {
    res.status(400);
    throw new Error("lentille not found");
  }

  await lentille.remove();

  res.status(200).json({ id: req.params.id });
});

// @desc    Get By Id lentille
// @route   Get /api/lentilles/:id
// @access  Private
const getByIdLentille = asyncHandler(async (req, res) => {
  const lentille = await Lentilles.findById(req.params.id);

  if (!lentille) {
    res.status(400);
    throw new Error("lentille not found");
  }

  res.status(200).json(lentille);
});

module.exports = {
  getLentilles,
  setLentille,
  updateLentille,
  deleteLentille,
  getByIdLentille,
};
