const jobModel = require("../../model/jobSchema");
const jobsByIdCtrls = async (req, res) => {
  try {
    const jobId = req.params;
    let job = await jobModel.findById({ _id: jobId });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
