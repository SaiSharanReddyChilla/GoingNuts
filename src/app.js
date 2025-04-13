const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

const portNo = 7777;

app.use("/admin", adminAuth);

// app.get("/user", userAuth);

// app.get("/user", (req, res) => {
//   res.send("User Data Returned");
// });

// Case where custom authentication is not required
app.post("/user/login", (req, res) => res.send("Successfully Logged In"));

// Passing series of middlewares handled against a single route (concise syntax to above version)
app.get("/user", userAuth, (req, res) => res.send("User Data Returned"));

app.get("/admin/allData", (req, res) => {
  res.send("All Data Returned");
});

app.get("/admin/deleteData", (req, res) => {
  res.send("Deleted Data");
});

app.get("/getUserData", (req, res) => {
  // try {
    throw new Error("Something went wrong, please try again later.");
  // } catch (err) {
  // res.status(500).send(err?.message);
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong, Please try again.");
  }
});

app.listen(portNo, () => {
  console.log("Server successfully Up and Running on Port No: ", portNo);
});
