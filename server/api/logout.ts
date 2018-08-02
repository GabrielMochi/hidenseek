import { Router } from 'express'

const router = Router()

router.post('/', (req, res): void => {
  delete req.session.user
  res.end()
})

export default router
