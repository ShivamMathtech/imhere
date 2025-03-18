const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORTNO || 3000;
app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
