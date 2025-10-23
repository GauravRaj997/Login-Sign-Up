const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// 🧠 Temporary in-memory "database"
let users = [];

// SIGNUP
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  console.log("New user signed up:", users);
  res.json({ success: true });
});

// LOGIN
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  // Check password
  if (password === "12345") {
    return res.json({ success: true });
  } else {
    return res.json({ success: false, message: "Password not matched" });
  }
});

// WELCOME
app.get("/api/welcome", (req, res) => {
  res.send("🎉 Welcome to the app!");
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
