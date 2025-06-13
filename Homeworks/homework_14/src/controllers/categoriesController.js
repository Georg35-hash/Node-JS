import { Category } from '../models/Category.js'

const addCategory = async (req, res) => {
  try {
    const { name } = req.body
    if (!name) {
      return res.status(400).json({ error: 'Haven\nt not req data' })
    }
    const newCategory = await Category.create({
      name,
    })
    res.status(201).json({ message: 'Category was created', newCategory })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { addCategory }
