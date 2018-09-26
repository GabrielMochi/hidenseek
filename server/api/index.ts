import bodyParser from 'body-parser'
import { Router } from 'express'
import session from 'express-session'
import category from './category'
import item from './item'
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

router.use('/category', category)
router.use('/item', item)
router.use('/local', local)
router.use('/login', login)
router.use('/logout', logout)
router.use('/user', user)

export default router
