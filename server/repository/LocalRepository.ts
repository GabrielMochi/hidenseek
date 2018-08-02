import Local from 'model/Local'
import pool from '.'
import SimpleRepository from './SimpleRepository'

export default class LocalRepository extends SimpleRepository<Local> {

  constructor () {
    super(pool, 'local')
  }

}
