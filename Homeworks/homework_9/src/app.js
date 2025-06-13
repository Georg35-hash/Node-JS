import bcrypt from 'bcrypt'
import 'dotenv/config.js'
import express from 'express'
import jwt from 'jsonwebtoken'
import sequelize from './config/db.js'
import {
  checkAuth,
  checkMustChangePassword,
} from './middleware/authMiddleware.js'
import adminOnly from './middleware/secureRoutesMiddleware.js'
import User from './models/User.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, sequelize!' })
})

app.get('/users', async (req, res) => {
  const user = await User.findAll()
  res.json(user)
})

app.post('/register', async (req, res) => {
  const { email, password, mustChangePassword, role } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }
  const existingUser = await User.findOne({ where: { email } })
  if (existingUser) {
    return res
      .status(400)
      .json({ error: 'User with this email already exists' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await User.create({
    email,
    password: hashedPassword,
    mustChangePassword: mustChangePassword || false,
    role: role || 'user',
  })
  res.status(201).json(newUser)
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email и пароль обязательны' })
  }

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Неверный пароль' })
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        mustChangePassword: user.mustChangePassword,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.json({ message: 'Успешный вход', token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

app.post(
  '/change-password',
  checkAuth,
  checkMustChangePassword,
  async (req, res) => {
    try {
      const { newPassword } = req.body
      if (!newPassword || newPassword.length < 6) {
        return res
          .status(400)
          .json({ error: 'Пароль должен быть не короче 6 символов' })
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10)
      const user = await User.findByPk(req.user.id)
      if (!user)
        return res.status(404).json({ error: 'Пользователь не найден' })

      user.password = hashedPassword
      user.mustChangePassword = false
      await user.save()

      res.json({ message: 'Пароль успешно обновлён' })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Ошибка сервера' })
    }
  }
)

app.delete(
  '/delete-account',
  checkAuth,
  checkMustChangePassword,
  async (req, res) => {
    try {
      const id = req.user.id
      const curPass = req.body.password

      if (!curPass) {
        return res.status(400).json({ error: 'Пароль обязателен' })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' })
      }

      const checkPass = await bcrypt.compare(curPass, user.password)
      if (!checkPass) {
        return res.status(400).json({ error: 'Неверный пароль' })
      }

      await user.destroy()
      res.json({ message: 'Аккаунт удалён' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Ошибка сервера' })
    }
  }
)

app.get(
  '/admin',
  checkAuth,
  checkMustChangePassword,
  adminOnly,
  async (req, res) => {
    res.json('Admin only Page')
  }
)

app.post(
  '/change-email',
  checkAuth,
  checkMustChangePassword,
  async (req, res) => {
    try {
      const { email: newEmail, password: curPassword } = req.body
      if (!newEmail || !curPassword || curPassword.length < 6) {
        return res
          .status(400)
          .json({ error: 'Нужны все данные и пароль минимум 6 символов' })
      }
      const user = await User.findByPk(req.user.id)
      if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' })
      }
      // Проверяем текущий пароль
      const isPasswordCorrect = await bcrypt.compare(curPassword, user.password)
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: 'Неверный пароль' })
      }
  
      const emailExists = await User.findOne({ where: { email: newEmail } })
      if (emailExists) {
        return res.status(400).json({ error: 'Этот email уже занят' })
      }

      
      user.email = newEmail
      await user.save()

      res.json({ message: 'Email успешно обновлён' })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Ошибка сервера' })
    }
  }
)

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('successfully connected to DB')
    console.log(`server is running on port http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
})
