const express = require("express");
const customerRouter = express.Router();
customerRouter.post("/requests", async (req, res) => {}); // Create a new service request
customerRouter.get("/requests", async (req, res) => {}); // get all the services by the customer
customerRouter.get("/requests/:id", async (req, res) => {}); // get specific service by the customer
customerRouter.put("/requests/:id/cancel", async (req, res) => {}); // Cancel service request
customerRouter.put("/requests/history", async (req, res) => {}); // Cancel service request

module.exports = customerRouter;
