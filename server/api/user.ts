import { Router } from 'express'
import User, { UserPermission } from './../../model/User'

const router: Router = Router()

const users: User[] = [
  new User(0, '111', 'Eduardo Mendes', 'dudu-7@hotmail.com', null, UserPermission.TOTAL),
  new User(
    1,
    '222',
    'Gabriel Mochi Ribeiro',
    'gmochi56@outlook.com',
    'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
    UserPermission.TOTAL
  ),
  new User(2, '333', 'Matheus Moreira', 'matheusm920@htomail.com', null, UserPermission.TOTAL),
  new User(3, '444', 'Maia', 'victor.gabriel.barbosa.maia@hotmail.com', null, UserPermission.TOTAL)
]

router.get('/', (req, res): void => {
  res.json(users)
})

router.get('/:id', (req, res): void => {
  if (req.params.id) {
    const foundUser: User = users.find((user: User): boolean => user.id === parseInt(req.params.id, 10))

    if (foundUser) {
      res.json(foundUser)
    } else {
      res.status(404).end('User not found.')
    }
  } else {
    res.status(422).end('id parameter is missing.')
  }
})

export default router
