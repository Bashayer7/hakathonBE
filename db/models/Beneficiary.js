const mongoose = require("mongoose");
const BeneficiarySchema = new mongoose.Schema(
  {
    name: String,
    IBAN: "^KW\d{2}[A-Z]{4}[A-Z0-9]{22}$",
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Beneficiary", BeneficiarySchema);
