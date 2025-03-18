const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["customer", "provider", "admin"],
    required: true,
  },
  phone: { type: String },
  address: { type: String },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], default: [0, 0] },
  },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("User", UserSchema);
