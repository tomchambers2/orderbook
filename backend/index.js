const express = require("express");
const { router } = require("./routes");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
