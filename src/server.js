const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const indexPage = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(indexPage);
});

app.listen(process.env.PORT, () => {
  console.log("listening on port: ", process.env.PORT);
});
