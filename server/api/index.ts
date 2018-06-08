import { Router } from 'express'
import user from './user'

const router: Router = Router()

router.use(user)

export default router
