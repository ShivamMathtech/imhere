const User = require("../../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();
const registerCtrls = async (req, res) => {
  try {
    const { name, email, role, password, phone, address } = req.body;
    console.log(req.body);
    let user = await User.find({ email: req.body.email });
    if (!user) {
      return res.status(401).json({
        msg: "User is already existed",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    user = new User({
      name,
      email,
      phone,
      role,
      password: hashPassword,
      address,
    });
    await user.save();
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
    res.status(200).json({
      msg: "User is registerd successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = registerCtrls;
