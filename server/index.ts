// dependencies
import express, { Application } from 'express'
import mongoose from 'mongoose'
import { Builder, Nuxt } from 'nuxt'

// config
import * as config from './../nuxt.config'

// routes
import api from './api'

config.dev = process.env.NODE_ENV !== 'production'

const nuxt = new Nuxt(config)
const app = express()
const port = parseInt(process.env.PORT, 10) || 3000

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/hidenseek', { useNewUrlParser: true })
  .then(() => console.log('The system was successfully connected to the database.'))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

app.set('port', port)
app.use('/api', api)

if (config.dev) {
  new Builder(nuxt).build()
}

app.use(nuxt.render)

app.listen(port, () => {
  console.info(`The server is running on port: ${port}`)
})
