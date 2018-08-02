import Category from 'model/Category'
import pool from '.'
import SimpleRepository from './SimpleRepository'

export default class CategoryRepository extends SimpleRepository<Category> {

  constructor () {
    super(pool, 'category')
  }

}
