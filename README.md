Инициализация express + mongo сервера
1. npm init -y
2. npm i  express dotenv mongoose mongodb bcrypt jsonwebtoken
3. npm i nodemon -D
4. type: module
5. Создаем .env файл, в него  MONGO_URI - берем строку подключения из compass
mongodb://localhost:27017/<<название db>>
PORT=3000
и остальное по необходимости
6. Создаем папку внутри src - db, в ней index.js файл.Это файл подключения к серверу
import mongoose from "mongoose";
import 'dotenv/config'

const connectionString = process.env.MONGO_URI  'mongodb://localhost:27017/mini-proj-3'

const connectDB = async() => {
    try {
        await mongoose.connect(connectionString)
        console.log('Database is connected');
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default connectDB;

7. внутри server.js 
import express from "express";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
const port = process.env.PORT  3333;
app.get("/", (req, res) => {
  res.json({ message: "hello home page" });
});
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on PORT " + port);
    });
  })
  .catch((err) => {
    console.error("Failed to start the server due to mongoDB error ", err);
  });