import mongoose from 'mongoose'

const magazineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  issueNumber: {
    type: Number,
    required: true,
  },
  publishers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Publisher',
    },
  ],
})

const Magazine = mongoose.model('Magazine', magazineSchema)
export { Magazine }
