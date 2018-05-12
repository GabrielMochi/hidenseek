import express, { Application } from 'express'
import { Builder, Nuxt } from 'nuxt'
import path from 'path'
import * as config from './../nuxt.config'

config.dev = process.env.NODE_ENV !== 'production'

const app: Application = express()
const port: number = parseInt(process.env.PORT, 10) || 3000

app.set('port', port)

app.listen(port, () => {
  console.info(`The server is running on port: ${port}`)
})
