import { Router } from 'express'
import { UNAUTHORIZED } from 'http-status-codes'

const router = Router()

router.post('/', (req, res): void => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    res.json((req.session.user = { username: req.body.username }))
  } else {
    res.status(UNAUTHORIZED).end()
  }
})

export default router
