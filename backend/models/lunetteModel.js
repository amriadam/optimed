const mongoose = require("mongoose");

const lunetteSchema = mongoose.Schema(
  {
    //lunette de vue ou de soleil
    type: String,
    marque: {
      type: String,
      required: [true, "Ajouter une marque"],
    },
    //homme ou femme
    categorie: {
      type: String,
      required: [true, "Ajouter une categorie"],
    },
    quantite: Number,
    description: String,
    photos: [{ type: String }],
    forme: String,
    matiere: String,
    couleur: String,
    montage: String,
    style: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lunette", lunetteSchema);
