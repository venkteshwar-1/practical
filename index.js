const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Server Running",
    time: new Date().toISOString()
  });
});
app.post("/create", (req, res) => {
  const data = req.body;

  res.json({
    message: "Data received successfully",
    receivedData: data
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000 http://localhost:3000");
});
