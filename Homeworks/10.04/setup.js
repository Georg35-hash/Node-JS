import { db } from "./db.js";

db.connect((err) => {
  if (err) {
    console.error("Ошибка подключения к базе:", err);
    return;
  }

  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL
    )
  `;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Таблица products создана или уже существует");
    db.end();
  });
});
