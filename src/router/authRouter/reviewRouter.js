const express = require("express");
const reviewRoter = express.Router();
reviewRoter.post("/reviews", async (req, res) => {}); // Submit review and ratings
reviewRoter.get("/reviews/:providerId", async (req, res) => {}); //  Getting the review and ratings of the service provider
reviewRoter.get("/reviews/user/:userId", async (req, res) => {}); //  Getting the review and ratings of the service provider

module.exports = reviewRoter;
