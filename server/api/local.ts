import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import Local from './../schema/Local'

const router = Router()

router.get('/', (req, res) => {
  Local.find({}).exec()
    .then((locals) => {
      res.send(locals)
    })
    .catch((error) => {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
