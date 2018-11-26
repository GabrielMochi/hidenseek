import { Request, Response, Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { CategoryModel } from '../schemas/CategorySchema'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find({}).exec()
    res.json(categories)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newCategory = await new CategoryModel(req.body).save()
    res.json(newCategory)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.post('/saveAll', async (req: Request, res: Response) => {
  try {
    const newCategories = await CategoryModel.create(req.body)
    res.json(newCategories)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const modifiedCategory = await CategoryModel
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .exec()

    res.json(modifiedCategory)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.delete('/:id', (req: Request, res: Response) => {
  CategoryModel.remove({ _id: req.params.id }).exec()
    .then(() => {
      res.end()
    })
    .catch((error) => {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    })
})

export default router
