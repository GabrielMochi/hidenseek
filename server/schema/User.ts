import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  distinctId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  thumbnail: { type: String },
  permission: { type: String, required: true, enum: ['LOW', 'HIGH', 'TOTAL'] }
<<<<<<< HEAD
}, { versionKey: false })
=======
}, {
  timestamps: true
})
>>>>>>> 7df7c3e02079abaccf2bb34305406f3aead94168

export default mongoose.model('User', UserSchema)
