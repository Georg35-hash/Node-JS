import mongoose from 'mongoose'

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
})

const Product = mongoose.model('Product', publisherSchema)
export { Product }
