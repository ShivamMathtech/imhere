const express = require("express");
const registerCtrls = require("../../controller/authCtrsl/registerCtrls");
const loginCtrls = require("../../controller/authCtrsl/loginCtrls");
const authMiddlerware = require("../../middleware/authMiddleware");
const logoutCtrls = require("../../controller/authCtrsl/logoutCtrls");
const meCtrls = require("../../controller/authCtrsl/meCtrls");
const forgetPasswordCtrls = require("../../controller/authCtrsl/forgetCtrls");
const resetCtrls = require("../../controller/authCtrsl/resetPasswordCtrl");
const authRouter = express.Router();
// Implementaton of the Auth ENPOINTS
authRouter.post("/auth/register", registerCtrls);
authRouter.post("/auth/login", loginCtrls);
authRouter.post("/auth/logout", authMiddlerware, logoutCtrls);
authRouter.get("/auth/me", authMiddlerware, meCtrls);
authRouter.post("/auth/forget-password", forgetPasswordCtrls); // Send a reset link to the mail
authRouter.post("/auth/reset-password/:token", resetCtrls); //

module.exports = authRouter;
