const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./api/user.route");
const invoiceRouter = require("./api/invoice.route");

app.use("/api/user", userRouter);
app.use("/api/invoice", invoiceRouter);
app.use("*", (req, res) => res.status(404).json({ error: "Page not found" }));

module.exports = app;
