import mongoose from 'mongoose'

const LocalSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, {
  timestamps: true
})

export default mongoose.model('Local', LocalSchema)
