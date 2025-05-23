import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

// GET /products
app.get("/products", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "fetch Error" });
  }
});

// POST /products
app.post("/products", async (req, res) => {
  const { name, price } = req.body;

  if (!name || price == null) {
    return res.status(400).json({ error: "Those fields ar required" });
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO products (name, price) VALUES (?, ?)",
      [name, price]
    );
    res.status(201).json({ message: "Already exist", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error per product" });
  }
});


app.get("/", (req, res) => {
  res.send("Сервер працює");
});

app.listen(PORT, () => {
  console.log(`Server is started http://localhost:${PORT}`);
});
