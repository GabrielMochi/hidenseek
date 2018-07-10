import { Router } from 'express'
import category from './category'
import local from './local'
import user from './user'

const router: Router = Router()

router.use('/user', user)
router.use('/category', category)
router.use('/local', local)

export default router
