import { Request, Response, Router } from 'express'
import { check, validationResult } from 'express-validator/check'
import { getStatusText, INTERNAL_SERVER_ERROR, UNPROCESSABLE_ENTITY } from 'http-status-codes'
import { Document } from 'mongoose'
import Category from '../schema/CategorySchema'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  Category.find({}).exec()
    .then((categories) => {
      res.send(categories)
    })
    .catch((error) => {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    })
})

router.post('/', [ check('name').isLength({ min: 1, max: 64 }) ], (req: Request, res: Response) => {
  if (!validationResult(req).isEmpty()) {
    return res.status(UNPROCESSABLE_ENTITY).end(getStatusText(UNPROCESSABLE_ENTITY))
  }

  (new Category(req.body)).save()
    .then(() => {
      res.end()
    })
    .catch((error) => {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    })
})

router.put('/:id', [ check('name').isLength({ min: 1, max: 64 }) ], (req: Request, res: Response) => {
  if (!validationResult(req).isEmpty()) {
    return res.status(UNPROCESSABLE_ENTITY).end(getStatusText(UNPROCESSABLE_ENTITY))
  }

  Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err: any) => {
    if (err) {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw err
    }
    res.end()
  })
})

router.delete('/:id', (req: Request, res: Response) => {
  Category.remove({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw err
    }

    res.end()
  })
})

export default router
