import express from "express";
import fetch from "node-fetch";
import os from "os";

const app = express();
app.get("/", (req, res) => {
  res.send(`Version 2:Hello from ${os.hostname()}`);
});

app.get("/nginx", async (req, res) => {
  const url = "http://nginx";
  const respone = await fetch(url);
  const body = await respone.text();
  res.send(body);
});

app.listen(3000, () => {
  console.log("server running");
});
