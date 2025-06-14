import express from 'express'
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/productController.js'

const router = express.Router()

router.get('/products', getAllProducts)
router.post('/products', addProduct)
router.get('/products/:id', getProductById)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router
