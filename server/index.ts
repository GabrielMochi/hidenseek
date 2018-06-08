// dependencies
import express, { Application } from 'express'
import { Builder, Nuxt } from 'nuxt'
import path from 'path'

// config
import * as config from './../nuxt.config'

// routes
import api from './api'

config.dev = process.env.NODE_ENV !== 'production'

const nuxt: any = new Nuxt(config)
const app: Application = express()
const port: number = parseInt(process.env.PORT, 10) || 3000

app.set('port', port)

app.use('/api', api)

if (config.dev) {
  console.log('dev!!')
  new Builder(nuxt).build()
}

app.use(nuxt.render)

app.listen(port, (): void => {
  console.info(`The server is running on port: ${port}`)
})
