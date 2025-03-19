const jobModel = require("../../model/jobSchema");
const jobsByIdCtrls = async (req, res) => {
  try {
    const jobId = req.params.id;

    let job = await jobModel.findById({ _id: jobId });
    if (!job) {
      return res.status(401).json({
        msg: "Not yet jobs are created",
      });
    }
    res.status(200).json({
      msg: "Find your created job",
      job,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = jobsByIdCtrls;
