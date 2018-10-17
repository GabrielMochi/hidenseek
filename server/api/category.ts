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

router.post('/', (req, res) => {
  const category = new Category(req.body)

  category.save()
    .then(() => {
      res.send(category.id)
    })
    .catch((err) => {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
