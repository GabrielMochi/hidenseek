import Identifiable from 'model/Identifiable'
import { Pool, queryCallback } from 'mysql'

export default abstract class SimpleRepository<T extends Identifiable> {

  private pool: Pool
  private tableName: string
  private relativeIdName: string

  constructor (pool: Pool, tableName: string, relativeIdName: string = 'id') {
    this.pool = pool
    this.tableName = tableName
    this.relativeIdName = relativeIdName
  }

  public get (id: string | number, callback: queryCallback): void {
    this.pool.query(`SELECT * FROM ${this.tableName} WHERE ${this.relativeIdName} = ${id}`)
  }

  public getAll (callback: queryCallback): void {
    this.pool.query(`SELECT * FROM ${this.tableName}`, callback)
  }

  public insert (element: T, callback: queryCallback): void {
    this.pool.query(`INSERT INTO ${this.tableName} SET ?`, element, callback)
  }

  public update (element: T, callback: queryCallback): void {
    this.pool.query(`UPDATE ${this.tableName} SET ? WHERE ${this.relativeIdName} = ${element.id}`, element, callback)
  }

  public delete (id: number | string, callback: queryCallback): void {
    this.pool.query(`DELETE FROM ${this.tableName} WHERE ${this.relativeIdName} = ${id}`)
  }

}
