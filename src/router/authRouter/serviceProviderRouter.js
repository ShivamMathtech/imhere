const express = require("express");
const serviceProviderRouter = express.Router();
serviceProviderRouter.get("/provider/requests", async (req, res) => {});
serviceProviderRouter.put(
  "/provider/requests/:id/accept",
  async (req, res) => {}
); // Accept the service request
serviceProviderRouter.put(
  "/provider/requests/:id/complete",
  async (req, res) => {}
); // Accept service request as completed
serviceProviderRouter.get("/provider/requests/history", async (req, res) => {}); // View Completetd services requests
serviceProviderRouter.get(
  "/provider/requests/earnings",
  async (req, res) => {}
); // View Completetd services requests
module.exports = serviceProviderRouter;
