const mongoose = require("mongoose");
const BeneficiarySchema = new mongoose.Schema({
  name: String,
  IBAN: {
    type: string,
    match: ["^KWd{2}[A-Z]{4}[A-Z0-9]{22}$", "Please fill a valid IBAN"],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
});
module.exports = mongoose.model("Beneficiary", BeneficiarySchema);
