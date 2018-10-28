import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String }
}, {
  timestamps: true
})

export default mongoose.model('Login', LoginSchema)
