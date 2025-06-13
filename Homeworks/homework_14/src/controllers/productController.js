import { Product } from '../models/Publisher.js'

const getAllProducts = async (req, res) => {
  try {
    const prodArr = await Product.find().populate('category')
    if (!prodArr) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.status(201).json({ prodArr })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body
    if (!name || !price || !category) {
      return res.status(400).json({ error: 'Haven\nt not req data' })
    }
    const newProduct = await Product.create({
      name,
      price,
      category,
    })
    res.status(201).json({ message: 'Product was created', newProduct })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { addProduct, getAllProducts }
