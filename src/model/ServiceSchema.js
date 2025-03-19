const mongoose = require("mongoose");
const ServiceRequestSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobschema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceType: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["pending", "accepted", "completed", "cancelled", "created"],
    default: "pending",
  },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

ServiceRequestSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("ServiceRequest", ServiceRequestSchema);
