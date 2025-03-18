const express = require("express");
const locationTrackerRouter = express.Router();
locationTrackerRouter.get("/location/providers", async (req, res) => {}); // Get nearby services providers
locationTrackerRouter.get(
  "/location/tracking/:requestId",
  async (req, res) => {}
); // Track service provider location
locationTrackerRouter.get("/location/user/:userId", async (req, res) => {}); // Track user's current location (admin only)
module.exports = locationTrackerRouter;
