const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
const timerRoutes = require("./routes/timerRoutes"); // ✅ add this
const summaryRoutes = require("./routes/summaryRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/summary", summaryRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/timer", timerRoutes); // ✅ mount timer routes

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
