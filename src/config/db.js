const mongoose = require("mongoose");
const env = require("dotenv").config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Internal server error for connecting the db", error);
  }
};

module.exports = mongoose;
