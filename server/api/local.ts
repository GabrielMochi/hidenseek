import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from '../../node_modules/http-status-codes'
import Local from './../../model/Local'
import LocalRepository from './../repository/LocalRepository'

const router = Router()
const localRepository = new LocalRepository()

router.get('/', (req, res) => {
  localRepository.getAll((err, results) => {
    if (err) {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    } else {
      res.json(results as Local[])
    }
  })
})

export default router
