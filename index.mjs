import express from "express";
import os from "os";

const app = express();
app.get("/", (req, res) => {
  res.send(`Version 2:Hello from ${os.hostname()}`);
});

app.listen(3000, () => {
  console.log("server running");
});
