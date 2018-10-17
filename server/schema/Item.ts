import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
<<<<<<< HEAD
  foundDate: { type: Date, required: true, default: Date.now },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }]
}, { versionKey: false })
=======
  found_date: { type: Date, required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  local: { type: mongoose.Schema.Types.ObjectId, ref: 'Local', required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }]
}, {
  timestamps: true
})
>>>>>>> 7df7c3e02079abaccf2bb34305406f3aead94168

export default mongoose.model('Item', ItemSchema)
