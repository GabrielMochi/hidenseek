import mongoose from 'mongoose'

const LocalSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String, required: true, unique: true }
}, { versionKey: false })
=======
  name: { type: String, required: true }
}, {
  timestamps: true
})
>>>>>>> 7df7c3e02079abaccf2bb34305406f3aead94168

export default mongoose.model('Local', LocalSchema)
