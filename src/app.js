// const express = require("express"); vanilla
import express from "express";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(PORT, () => {
  console.log(`🍀${PORT} SERVER START!`);
});
