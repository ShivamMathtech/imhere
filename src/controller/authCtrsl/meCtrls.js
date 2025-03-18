const User = require("../../model/User");
const meCtrls = async (req, res) => {
  try {
    const userId = req.user;
    let user = await User.findById({ _id: userId });
    console.log(userId);
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    res.status(200).json({
      msg: "User found",
      user,
    });
  } catch (error) {
    res.status(401).json({
      msg: "Invlid Token",
      error: error.message,
    });
  }
};
module.exports = meCtrls;
