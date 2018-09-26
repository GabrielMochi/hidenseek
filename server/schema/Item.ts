import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  found_date: { type: Date, required: true, default: Date.now },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }]
})

export default mongoose.model('Item', ItemSchema)
