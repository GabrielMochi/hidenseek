import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  foundDate: { type: Date, required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }]
}, {
  timestamps: true
})

export default mongoose.model('Item', ItemSchema)
