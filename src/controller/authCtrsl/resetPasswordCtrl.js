const User = require("../../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let resetCtrls = async (req, res) => {
  try {
    let { token } = req.params;
    console.log(token);
    // Extract token from URL
    const { newPassword } = req.body;
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    let user = await User.findById({ _id: decoded.id });
    // console.log(user);
    // // const user = User.findById({ _id: decoded.id });

    // // console.log(user._id);
    console.log(user); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // if (decoded.purpose !== "password-reset") {
    //   return res
    //     .status(400)
    //     .json({ message: "Invalid token for password reset" });
    // }
    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // Save the updated password
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = resetCtrls;
