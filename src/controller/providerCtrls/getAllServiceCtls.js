const jobModel = require("../../model/jobSchema");
const getAllServiceCtrls = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getAllServiceCtrls;
