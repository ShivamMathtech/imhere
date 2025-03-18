const express = require("express");
const notificationRouter = express.Router();
notificationRouter.get("/notofications", async (req, res) => {}); //Get all notifications for a user
notificationRouter.post("/notofications/read/;id", async (req, res) => {}); //Mark all notification as read
module.exports = notificationRouter;
