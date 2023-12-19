const express = require("express");
const app = express();
const process=require("process")
const WebsiteRouter = require("./Router1");
const ContactUsRouter = require("./Router2");
const FormRouter = require("./Router3");
app.use(express.static("./"));
app.use("/", WebsiteRouter);
app.use("/", ContactUsRouter);
app.use("/", FormRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
process.exit(0);
