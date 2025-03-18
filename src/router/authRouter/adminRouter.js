const express = require("express");
const adminRouter = express.Router();
adminRouter.get("/admin/users", async (req, res) => {}); // Get all users
adminRouter.get("/admin/requests", async (req, res) => {}); // Get all services requests
adminRouter.put("/admin/requests/:id/status", async (req, res) => {}); // update the request status
adminRouter.get("/admin/payments", async (req, res) => {}); // View all payments transcations
adminRouter.get("/admin/reports", async (req, res) => {}); // Genrate reports and anayltics
module.exports = adminRouter;
