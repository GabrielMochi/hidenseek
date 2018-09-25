import mongoose from 'mongoose'

const connection = mongoose.createConnection(
  'mongodb://localhost:27017/hidenseek',
  { useNewUrlParser: true }
)

connection.on('open', () => {
  console.log('MongoDB Connected!')
})

connection.on('error', (error: Error) => {
  console.error(error)
})

export default connection
