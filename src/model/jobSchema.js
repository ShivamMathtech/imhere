const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // The user who created the job
  title: { type: String, required: true }, // Job title (e.g., "House Cleaner", "Plumber", "Electrician")
  description: { type: String, required: true }, // Detailed job description
  category: { type: String, required: true }, // Category (e.g., "Cleaning", "Electrical", "Plumbing", "IT Support")
  budget: { type: Number, required: true }, // Budget for the job
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], default: [0, 0] }, // [Longitude, Latitude]
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Completed"],
    default: "Open",
  },
  createdAt: { type: Date, default: Date.now },
});

JobSchema.index({ location: "2dsphere" });

const jobModel = mongoose.model("Job", JobSchema);
module.exports = jobModel;
