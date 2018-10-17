import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String }
<<<<<<< HEAD
}, { versionKey: false })
=======
}, {
  timestamps: true
})
>>>>>>> 7df7c3e02079abaccf2bb34305406f3aead94168

export default mongoose.model('Login', LoginSchema)
