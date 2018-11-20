import { Request, Response, Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { ItemModel } from '../schemas/ItemSchema'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  ItemModel.find({})
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
  const item = new ItemModel(req.body)

  item.save()
    .then(() => {
      res.send(item.id)
    })
    .catch((err) => {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

// router.put('/:id', (req: Request, res: Response) => {
//   ItemModel.findOneAndUpdate({ _id:   })
// })

export default router
