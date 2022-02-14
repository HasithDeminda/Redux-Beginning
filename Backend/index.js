const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//API for redux testing. No DB connection, just a timeout response for testing redux app
app.post("/api/users/:id/update", (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, [2000]);
});

app.listen(8800, () => {
  console.log("Backend is Running on PORT : 8800");
});
 