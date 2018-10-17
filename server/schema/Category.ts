import mongoose, { Schema } from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, { versionKey: false })

export default mongoose.model('Category', CategorySchema)
