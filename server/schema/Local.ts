import mongoose from 'mongoose'

const LocalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, { versionKey: false })

export default mongoose.model('Local', LocalSchema)
