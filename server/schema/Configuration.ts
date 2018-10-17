import mongoose from 'mongoose'

const ConfigurationSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  guests: { type: Boolean, default: false, required: true },
  contract: { Type: String },
  distinctIdPattern: { type: RegExp }
}, { versionKey: false })

export default mongoose.model('Configuration', ConfigurationSchema)
