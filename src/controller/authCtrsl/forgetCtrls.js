const User = require("../../model/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../utils/sendEmail");
const forgetPasswordCtrls = async (req, res) => {
  try {
    const { email } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    const resetLink = `http://localhost:5000/api/auth/reset-password/${token}`;

    await sendEmail(
      user.email,
      "Password Reset Request",
      `Click on this link to reset your password: ${resetLink}`
    );

    res.json({ message: "Password reset email sent successfully", token });
  } catch (error) {
    res.status(500).json({
      msg: "Ineternal Server Error",
      error: error.message,
    });
  }
};

module.exports = forgetPasswordCtrls;
