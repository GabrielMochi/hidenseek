import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from '../../node_modules/http-status-codes'
import Category from './../../model/Category'
import CategoryRepository from './../repository/CategoryRepository'

const router: Router = Router()
const categoryRepository: CategoryRepository = new CategoryRepository()

router.get('/', (req, res): void => {
  categoryRepository.getAll((err, results) => {
    if (err) {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    } else {
      res.json(results as Category[])
    }
  })
})

export default router
