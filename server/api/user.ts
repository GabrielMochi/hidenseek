import { Request, Response, Router } from 'express'
import { getStatusText, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import {UserModel} from '../schemas/UserSchema'
import { Permission } from '../../domain/User';

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find({permission: Permission.LOW}).exec()
      res.json(users)
    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    }
})

router.get('/employees', async (req: Request, res: Response) => {
    try {
      const employees = await UserModel.find({permission: Permission.HIGH}).exec()
      res.json(employees)
    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    }
})

router.post('/', async (req: Request, res: Response) => {
    try {
      const newUser = await new UserModel(req.body).save()
      res.json(newUser)
    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    }
  })

  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const modifiedUser = await UserModel
        .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .exec()
  
      res.json(modifiedUser)
    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
      throw error
    }
  })
  
  router.delete('/:id', (req: Request, res: Response) => {
    UserModel.remove({ _id: req.params.id }).exec()
      .then(() => {
        res.end()
      })
      .catch((error) => {
        res.status(INTERNAL_SERVER_ERROR).end(getStatusText(INTERNAL_SERVER_ERROR))
        throw error
      })
  })
export default router
