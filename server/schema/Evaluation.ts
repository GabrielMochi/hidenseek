import mongoose from 'mongoose'

const EvaluationSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['APPROVED', 'NOT_APPROVED', 'NOT_EVALUATED'],
    default: 'NOT_EVALUATED',
    required: true
  },
  date: { type: Date, default: Date.now, required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  claim: { type: mongoose.Schema.Types.ObjectId, ref: 'Claim', required: true }
})

export default mongoose.model('Evaluation', EvaluationSchema)
