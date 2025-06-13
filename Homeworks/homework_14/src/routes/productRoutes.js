import express from 'express'
import { addCategory } from '../controllers/categoriesController.js'
import { addProduct, getAllProducts } from '../controllers/productController.js'

const router = express.Router()

router.get('/products', getAllProducts)
router.post('/products', addProduct)
router.post('/categories', addCategory)

export default router
