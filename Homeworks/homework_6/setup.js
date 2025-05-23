import { db } from "./db.js";

const sql = `
  CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )
`;

try {
  await db.execute(sql);
  console.log("Таблиця 'products' створена або вже існує");
} catch (err) {
  console.error("Помилка при створенні таблиці:", err);
}
