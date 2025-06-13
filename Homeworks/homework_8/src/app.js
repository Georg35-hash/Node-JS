import 'dotenv/config.js'
import express from 'express'
import sequelize from './config/db.js'
import Book from './models/Book.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, sequelize!' })
})


app.get('/books', async (req, res) => {
  const books = await Book.findAll()
  res.json(books)
})


app.post('/books', async (req, res) => {
  const book = await Book.create(req.body)
  res.status(201).json(book)
})


app.put('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  if (book) {
    await book.update(req.body)
    res.json(book)
  } else {
    res.status(404).json({ error: 'Book not found' })
  }
})


app.delete('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  if (book) {
    await book.destroy()
    res.json({ message: 'Book deleted' })
  } else {
    res.status(404).json({ error: 'Book not found' })
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('successfully connected to DB')
    console.log(`server is running on port http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
})

