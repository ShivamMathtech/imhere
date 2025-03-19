const User = require("../../model/User");
const ServiceSchema = require("../../model/ServiceSchema");
// const Job = require("../../model/jobSchema");
// const Job = require("../../model/jobSchema");
const jobModel = require("../../model/jobSchema");
const createService = async (req, res) => {
  try {
    const userId = req.user;
    const { title, description, category, budget, coordinates } = req.body;
    let user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(400).json({
        msg: "Invlaid credentails",
      });
    }
    const job = new jobModel({
      user: userId,
      title,
      description,
      category,
      budget,
      location: {
        type: "Point",
        coordinates,
      },
    });
    await job.save();
    res.status(200).json({
      msg: "Ok",
      job,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Inernal Server Error",
      error: error.message,
    });
  }
};

module.exports = createService;
