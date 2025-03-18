const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();
const authMiddlerware = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  const token = authHeader.split(" ")[1];

  try {
    // Verify the Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    let user = await User.findById({ _id: decoded.id }).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    // attch user to request
    req.user = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      msg: "Invalid token or credentails",
    });
  }
};

module.exports = authMiddlerware;
