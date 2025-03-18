const express = require("express");
const authRouter = express.Router();
// Implementaton of the Auth ENPOINTS
authRouter.post("/auth/register", async (req, res) => {});
authRouter.post("/auth/login", async (req, res) => {});
authRouter.post("/auth/logout", async (req, res) => {});
authRouter.get("/auth/me", async (req, res) => {});
authRouter.post("/auth/forget-password", async (req, res) => {}); // Send a reset link to the mail
authRouter.post("/auth/reset-password", async (req, res) => {}); // Send a reset password using token
authRouter.post("/auth/verify-email", async (req, res) => {}); //
authRouter.post("/auth/resent-verification", async (req, res) => {});

module.exports = authRouter;
