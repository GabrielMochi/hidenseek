import { Request, Response, Router } from 'express'
import User from './../../model/User'

const router: Router = Router()

const users: User[] = [
  new User(0, 'Eduardo Mendes', 'dudu-7@hotmail.com', '11973756450', null),
  new User(1, 'Gabriel Mochi Ribeiro', 'gmochi56@outlook.com', '11973756450', null),
  new User(2, 'Matheus Moreira', 'matheusm920@htomail.com', '11973756450', null),
  new User(3, 'Maia', 'victor.gabriel.barbosa.maia@hotmail.com', '11973756450', null)
]

router.get('/users', (req: Request, res: Response): void => {
  res.json(users)
})

router.get('/users/:id', (req: Request, res: Response): void => {
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
