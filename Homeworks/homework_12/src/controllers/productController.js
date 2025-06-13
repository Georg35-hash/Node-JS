import { Product } from '../models/Products.js'

const getAllProducts = async (req, res) => {
  try {
    const prodArr = await Product.find()
    if (!prodArr) {
      return res.status(404).json({ error: 'No products found' })
    }
    res.json(prodArr)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body
    if (!name || !price || !description) {
      return res.status(400).json({ error: 'Haven\nt not req data' })
    }
    const newProd = await Product.create({
      name,
      price,
      description,
    })
    res.status(201).json({ message: 'Product was created', newProd })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const prod = await Product.findById(id)

    if (!prod) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json(prod)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body

    const updateProd = await Product.findByIdAndUpdate(id, data, {
      new: true,
    })
    if (!updateProd) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json({ message: 'Product updated', updateProd })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id
    const deleteProd = await Product.findByIdAndDelete(id)
    if (!deleteProd) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json({ message: 'Product deleted', deleteProd })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
}
