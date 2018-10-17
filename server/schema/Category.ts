import mongoose, { Schema } from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, {
  timestamps: true
})

export default mongoose.model('Category', CategorySchema)
