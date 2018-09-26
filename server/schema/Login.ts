import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String }
})

export default mongoose.model('Login', LoginSchema)
