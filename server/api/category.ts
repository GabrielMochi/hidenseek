import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import Category from './../schema/Category'

const router = Router()

router.get('/', (req, res) => {
  Category.find({}).exec()
    .then((categories) => {
      res.send(categories)
    })
    .catch((error) => {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
