import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// 🎯 Countdown target: 5:00 PM EST on Oct 15, 2025
// EST = UTC-5 → 21:00 UTC
const targetDate = new Date("2025-10-15T21:00:00Z");

// API route for remaining time
app.get("/api/time-left", (req, res) => {
  const now = new Date();
  const difference = targetDate - now;
  res.json({
    difference: Math.max(difference, 0), // never go negative
    serverTime: now.toISOString(),
    targetTime: targetDate.toISOString(),
  });
});

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⏱️ Time server running on port ${PORT}`);
});
