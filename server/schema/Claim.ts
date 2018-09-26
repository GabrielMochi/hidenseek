import mongoose from 'mongoose'

const ClaimSchema = new mongoose.Schema({
  argument: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true }
})

export default mongoose.model('Claim', ClaimSchema)
