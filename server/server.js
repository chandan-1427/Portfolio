import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow Vercel frontend & localhost
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://portfolio-delta-tan-75.vercel.app/"
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

// ✅ Root route for Render to verify
app.get("/", (req, res) => {
  res.send("✅ Backend server is running");
});

// API Routes
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
