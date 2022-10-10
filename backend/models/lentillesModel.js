const mongoose = require("mongoose");

const lentilleSchema = mongoose.Schema(
  {
    marque: {
      type: String,
      required: [true, "Ajouter une marque"],
    },

    quantite: Number,
    type: String,
    filtreUv: Boolean,
    couleur: String,
    fournisseur: String,
    description: String,
    photos: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lentille", lentilleSchema);
