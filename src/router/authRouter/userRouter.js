const express = require("express");
const userRouter = express.Router();
userRouter.get("/users", async (req, res) => {}); // Only admin can take it
userRouter.get("/users/:id", async (req, res) => {});
userRouter.put("/users/:id", async (req, res) => {}); // Update the user Profile
userRouter.delete("/users/:id", async (req, res) => {});
userRouter.delete("/users/:id", async (req, res) => {}); // only admin can delete it
userRouter.get("/users/providers", async (req, res) => {}); // Get list of available service providers
module.exports = userRouter;
