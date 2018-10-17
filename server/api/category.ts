import { Router } from 'express'
import { check, validationResult } from 'express-validator/check'
import { getStatusText, INTERNAL_SERVER_ERROR, UNPROCESSABLE_ENTITY } from 'http-status-codes'
import Category from './../schema/Category'

const router = Router()

router.get('/', (req, res) => {
  Category.find({}).exec()
    .then((categories) => {
      res.send(categories)
    })
    .catch((error) => {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    })
})

router.post('/', [check('name').isLength({ min: 1, max: 64 })], (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(UNPROCESSABLE_ENTITY).end(getStatusText(UNPROCESSABLE_ENTITY))
  }

  (new Category(req.body)).save()
      .then((category) => {
        res.end()
      })
      .catch((error) => {
        res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
        throw error
      })
})

export default router
