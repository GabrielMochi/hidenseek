import { Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import User from './../schema/User'

const router = Router()

router.get('/', (req, res) => {
  User.find({}).exec()
    .then((users) => {
      res.send(users)
    })
    .catch((error) => {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

router.post('/', (req, res) => {
  const user = new User(req.body)

  user.save()
    .then(() => {
      res.send(user.id)
    })
    .catch((err) => {
      console.error(err)
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
    })
})

export default router
