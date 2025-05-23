import express from "express";
import { db } from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET /
app.get("/", (req, res) => {
  try {
    res.send("Hello, World!");
  } catch (err) {
    res.status(500).send("Ошибка сервера");
  }
});

// POST /
app.post("/", (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).send("Нет данных в запросе");
  }
  res.send(`Данные получены: ${JSON.stringify(data)}`);
});

// GET /products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).send("Ошибка БД");
    res.json(results);
  });
});

// POST /products
app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).send("Отсутствуют name или price");
  }

  const sql = "INSERT INTO products (name, price) VALUES (?, ?)";
  db.query(sql, [name, price], (err, result) => {
    if (err) return res.status(500).send("Ошибка при добавлении продукта");
    res.send("Продукт добавлен успешно");
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
