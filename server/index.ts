process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION ❌");
  console.error(err);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED PROMISE ❌");
  console.error(reason);
});

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist/public")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
