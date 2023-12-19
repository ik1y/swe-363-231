const express = require("express");
const path = require("path");
const app = express();
const process=require("process")
app.use(express.static("./")); // Serve static files from the root directory

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Website.html"));
});

app.get("/ContactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "ContactUs.html"));
});
app.get("/Form", (req, res) => {
    res.sendFile(path.join(__dirname, "Form.html"));
  });


// ... other routes for additional pages
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
process.exit(0);
