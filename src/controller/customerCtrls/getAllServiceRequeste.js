const jobModel = require("../../model/jobSchema");
const getAllServiceRequets = async (req, res) => {
  try {
    const userId = req.user;
    let job = await jobModel.find({ user: userId });
    if (!job) {
      return res.status(404).json({
        msg: "Not yet job created",
      });
    }
    res.status(200).json({
      msg: "your all jobs",
      job,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getAllServiceRequets;
