const logoutCtrls = async (req, res) => {
  try {
    await res.status(200).json({
      msg: "You logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ineternal Server Error",
    });
  }
};

module.exports = logoutCtrls;
