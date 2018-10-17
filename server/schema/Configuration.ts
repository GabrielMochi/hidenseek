import mongoose from 'mongoose'

const ConfigurationSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  guests: { type: Boolean, default: false, required: true },
  contract: { Type: String },
  distinctIdPattern: { type: RegExp }
<<<<<<< HEAD
}, { versionKey: false })
=======
}, {
  timestamps: true
})
>>>>>>> 7df7c3e02079abaccf2bb34305406f3aead94168

export default mongoose.model('Configuration', ConfigurationSchema)
