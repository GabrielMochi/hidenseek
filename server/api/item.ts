import { Request, Response, Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import Item from '../schema/ItemSchema'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  Item.find({})
    .populate('employee')
    .populate('local')
    .populate('categories')
    .exec()
      .then((items) => {
        res.send(items)
      })
      .catch((error) => {
        console.error(error)
        res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      })
})

router.post('/', (req: Request, res: Response) => {
  const item = new Item(req.body)

  item.save()
    .then(() => {
      res.send(item.id)
    })
    .catch((err) => {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
