const asyncHandler = require("express-async-handler");

const Lunette = require("../models/lunetteModel");

// @desc    Get lunettes
// @route   GET /api/lunettes
// @access  Private
const getLunettes = asyncHandler(async (req, res) => {
  const lunettes = await Lunette.find();

  res.status(200).json(lunettes);
});

// @desc    Set lunette
// @route   POST /api/lunettes
// @access  Private
const setLunette = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("empty body");
  }

  const lunette = await Lunette.create({
    type: req.body.type,
    marque: req.body.marque,
    categorie: req.body.categorie,
    quantite: req.body.quantite,
    description: req.body.description,
    photos: req.body.photos,
    forme: req.body.forme,
    matiere: req.body.matiere,
    couleur: req.body.couleur,
    montage: req.body.montage,
    style: req.body.style,
  });

  res.status(200).json(lunette);
});

// @desc    update lunette
// @route   PUT /api/lunettes/:id
// @access  Private
const updateLunette = asyncHandler(async (req, res) => {
  const lunette = await Lunette.findById(req.params.id);

  if (!lunette) {
    res.status(400);
    throw new Error("lunette not found");
  }

  const updatedlunette = await Lunette.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedlunette);
});

// @desc    Delete lunette
// @route   DELETE /api/lunettes/:id
// @access  Private
const deleteLunette = asyncHandler(async (req, res) => {
  const lunette = await Lunette.findById(req.params.id);

  if (!lunette) {
    res.status(400);
    throw new Error("lunette not found");
  }

  await lunette.remove();

  res.status(200).json({ id: req.params.id });
});

// @desc    Get By Id lunette
// @route   Get /api/lunettes/:id
// @access  Private
const getByIdLunette = asyncHandler(async (req, res) => {
  const lunette = await Lunette.findById(req.params.id);

  if (!lunette) {
    res.status(400);
    throw new Error("lunette not found");
  }

  res.status(200).json(lunette);
});

module.exports = {
  getLunettes,
  setLunette,
  updateLunette,
  deleteLunette,
  getByIdLunette,
};
