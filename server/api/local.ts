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

router.post('/', (req, res) => {
  const local = new Local(req.body)

  local.save()
    .then(() => {
      res.send(local.id)
    })
    .catch((err) => {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
