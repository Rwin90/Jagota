const express = require("express");
const app = express();
const port = 3030;
const reportRouter = require("./routes/report.route");
const cors = require("cors");
app.get("/", (req, res) => {
  res.send("ok");
});

app.use(cors());
app.use("/report", reportRouter);
//runkit.com/
https: app.listen(port, () => {
  console.log(`App is  listening on port ${port}`);
});
