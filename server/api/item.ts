import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import Item from './../schema/Item'

const router = Router()

router.get('/', (req, res) => {
  Item.find({}).exec()
    .then((items) => {
      res.send(items)
    })
    .catch((error) => {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
