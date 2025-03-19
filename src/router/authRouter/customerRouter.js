const express = require("express");
const createService = require("../../controller/customerCtrls/custmerCreateRequest");
const authMiddlerware = require("../../middleware/authMiddleware");
const getAllServiceRequets = require("../../controller/customerCtrls/getAllServiceRequeste");
const customerRouter = express.Router();
customerRouter.post("/requests", authMiddlerware, createService); // Create a new service request
customerRouter.get("/requests", authMiddlerware, getAllServiceRequets); // get all the services by the customer
customerRouter.get("/requests/:id", async (req, res) => {}); // get specific service by the customer
customerRouter.put("/requests/:id/cancel", async (req, res) => {}); // Cancel service request
customerRouter.put("/requests/history", async (req, res) => {}); // Cancel service request

module.exports = customerRouter;
