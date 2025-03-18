const mongoose = require("mongoose");
const ReportSchema = new mongoose.Schema({
  type: { type: String, required: true },
  details: { type: String, required: true },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  request: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequest" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", ReportSchema);
