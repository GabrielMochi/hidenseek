import bodyParser from 'body-parser'
import { Router } from 'express'
import session from 'express-session'
import category from './category'
import local from './local'
import login from './login'
import logout from './logout'
import user from './user'

const router: Router = Router()

router.use(bodyParser.json())

router.use(session({
  secret: '2yHnRnuDEfpdIUyzFONyfjMXWpFeHGDZ',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

router.use('/user', user)
router.use('/category', category)
router.use('/local', local)
router.use('/login', login)
router.use('/logout', logout)

export default router
