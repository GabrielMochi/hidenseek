import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { LocalModel } from './../schemas/LocalSchema'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const categories = await LocalModel.find({}).exec()
    res.json(categories)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.post('/', async (req, res) => {
  try {
    const newCategory = await new LocalModel(req.body).save()
    res.json(newCategory)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.post('/saveAll', async (req, res) => {
  try {
    const newCategories = await LocalModel.create(req.body)
    res.json(newCategories)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.put('/:id', async (req, res) => {
  try {
    const modifiedCategory = await LocalModel
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .exec()

    res.json(modifiedCategory)
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    throw error
  }
})

router.delete('/:id', (req, res) => {
  LocalModel.remove({ _id: req.params.id }).exec()
    .then(() => {
      res.end()
    })
    .catch((error) => {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    })
})

export default router
