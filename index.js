const express = require("express");
const cors = require("cors");
const authRouter = require("./src/router/authRouter/authRouter");
const env = require("dotenv").config();
const app = express();
const mongoose = require("./src/config/db");
const customerRouter = require("./src/router/authRouter/customerRouter");
app.use(cors());
app.use(express.json());
app.use("/api", authRouter);
app.use("/api", customerRouter);
const port = process.env.PORTNO || 3000;
app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
